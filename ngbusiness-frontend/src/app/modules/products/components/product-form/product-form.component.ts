import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Product } from 'src/app/core/services/product.service';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/ngrx-store/store";

import { StartProductCreate, StartProductUpdate } from 'src/app/core/ngrx-store/products/product.actions';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnChanges {
  @Input() product: Product | null | undefined = null;
  form: FormGroup = new FormGroup({
    title: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    picture: new FormControl("", [Validators.required])
  });

  constructor(private store: NgrxStore<Store>) {}

  ngOnChanges(): void {
    if (this.product) this.form.patchValue(this.product);
  }

  submit(): void {
    // Update product.
    if (this.product) {
      return this.store.dispatch(
        StartProductUpdate({
          id: this.product.id,
          data: this.form.value
        })
      );
    }

    // Create product.
    this.store.dispatch(
      StartProductCreate({
        payload: this.form.value
      })
    );
  }
}
