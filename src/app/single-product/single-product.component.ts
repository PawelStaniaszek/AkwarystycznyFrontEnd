import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../Models/Product';
import { RequestService } from '../RequestService.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  product: Product;
  myParam: string;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _produktService: RequestService
  ) {
    this.product = {
      id: "",
      name: "",
      price: 0,
      description: "",
      longDescription: "",
      picture: "",
      category: undefined,
    }
    
    this._Activatedroute.queryParams.subscribe({next: (params) => {
      this.myParam = params.Id;
      this._produktService.getOneProdukt(this.myParam).subscribe({next: (val) => {this.product = val}});
  }})
  }
  id;
  ngOnInit(): void {
  }
}