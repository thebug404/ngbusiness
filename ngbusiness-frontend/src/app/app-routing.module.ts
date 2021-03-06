import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./modules/dashboard/dashboard.module").then(module => module.DashboardModule)
  },
  {
    path: "clients",
    loadChildren: () => import("./modules/clients/clients.module").then(module => module.ClientsModule)
  },
  {
    path: "products",
    loadChildren: () => import("./modules/products/products.module").then(module => module.ProductsModule)
  },
  {
    path: "orders",
    loadChildren: () => import("./modules/orders/orders.module").then(module => module.OrdersModule)
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
