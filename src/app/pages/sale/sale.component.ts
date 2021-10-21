import { Component, OnInit } from '@angular/core';
import { Sale } from '../../models/sale/sale';
import { SaleService } from '../../services/sale/sale.service';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product/product';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../models/customer/customer';
import { CustomerService } from '../../services/customer/customer.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  ventas:any[] = [];
  cliente: Customer[] = [];
  producto:Product[] = [];
  id: any = 0;

  constructor(private _saleService: SaleService,
    private _productService: ProductService,
    private _customerService: CustomerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let data: [] = [];
    this.id = this.route.snapshot.paramMap.get("id");

    
    this._customerService.list().subscribe(clientes =>{
      clientes.forEach((clint: any) => {
        if(clint.CustomerId == this.id){
          this.cliente.push(clint);
        }
      });
      console.log("cli1", this.cliente);
      console.log("cli2", this.cliente[0].Name);
      
    })

    this._productService.list().subscribe(productos => {
      this.producto = productos;
    });

    this._saleService.list(this.id).subscribe(sales => {
      console.log("sales",sales);
      sales.forEach((saless: any) => {
        this.ventas.push(saless.Lines);
      })
      console.log("ventas",this.ventas);
    });
    
  }

}
