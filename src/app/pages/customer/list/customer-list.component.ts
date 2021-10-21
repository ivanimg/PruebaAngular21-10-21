import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/models/customer/customer';

import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  cliente:Customer[] = [];

  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this._customerService.list().subscribe(clientes =>{
      console.log("cli", clientes);
      this.cliente = clientes;
    })
  }
}
