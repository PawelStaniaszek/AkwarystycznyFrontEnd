import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { RequestService } from '../RequestService.service';
import { Product } from '../../Models/Product';

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.scss'],
})
export class ProduktComponent implements OnInit {
  produkts: Product[] = [];
  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';

  constructor(private produktService: RequestService) {
    this.produktService.getProdukt().subscribe(val => {
      this.produkts = val;
    });
  }

  ngOnInit() {
    
    this.sortOptions = [
      { label: 'Cena malejąco', value: '!price' },
      { label: 'Cena rosnąco', value: 'price' },
    ];
  }
  
  onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  clickEvent(id: String){
    if(sessionStorage["token"] ==null){
      alert("Aby dodać produkt musisz być zalogowany");
    }else{
      this.produktService.addProductToCart(id).subscribe(res=>{
        alert("Produkt został dodany do koszyka");
    });
    }  
  }
}
