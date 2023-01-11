import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/Models/ProductCart';
import { RequestService } from '../RequestService.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: ProductCart[] = [];
  public sum: number;
  constructor(private produktService: RequestService) {
    this.sum = 0;
    this.produktService.getUserCart().subscribe({next: (val) => {
      this.products = val;
      this.sumProducts();
    }});
  }

  ngOnInit(): void {
  }
  sumProducts(){
    
    this.sum = 0;
    this.products.forEach(element=>{
       this.sum =this.sum + (element.quantity*element.product.price);
    })
  }
  clickEvent(id: String){
    this.produktService.DeleteProductFromCart(id).subscribe(val => {
      window.location.reload();
    })
  }
}
