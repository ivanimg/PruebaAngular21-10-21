import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  producto:Product[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.list().subscribe(productos => {
      this.producto = productos;
      console.log("prod", this.producto);
    });
  }

}
