import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { SaleRoutingModule } from './sale-routing.module';

import { SaleComponent } from './sale.component';

@NgModule({
  imports: [
    SaleRoutingModule,
    SharedModule,
  ],
  declarations: [SaleComponent],
  exports: [SaleComponent]
})
export class SaleModule { }
