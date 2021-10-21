import { Injectable } from '@angular/core';

import sales from '../../data/sale/sale.json';

import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer/customer';
import { Sale } from '../../models/sale/sale';

@Injectable({
    providedIn: 'root'
})
export class SaleService {
    list(customerId: Number): Observable<Sale[]> {
        return new Observable<Sale[]>(
            observable => {
                let data: Sale[] = [];
                sales.forEach((sale: any) => {
                    if(sale.CustomerId == customerId){
                        //data.push(sale.Lines)
                        data.push(sale);
                    }
                    
                });
                observable.next(data);
            }
        );
    }
}
