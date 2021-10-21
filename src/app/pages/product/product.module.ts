import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';

import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    ProductRoutingModule,
    SharedModule,
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent],
})
export class ProductModule { }
