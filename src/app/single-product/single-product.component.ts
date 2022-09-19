import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produkt } from '../produkt/produkt';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  product: Produkt;
  myParam: string;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _produktService: TestServiceService
  ) {}

  sub;
  name;
  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(async params => {
      console.log(params);
       this.name = params.get('name');
       let products=await this._produktService.getProdukt();
       this.product=products.find(p => p.Nazwa==this.name);
   });
  }
}
