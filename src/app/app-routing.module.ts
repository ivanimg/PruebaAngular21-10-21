import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customer' },
  { path: 'customer', loadChildren: () => import('./pages/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) },
  { path: 'sale/:id', loadChildren: () => import('./pages/sale/sale.module').then(m => m.SaleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
