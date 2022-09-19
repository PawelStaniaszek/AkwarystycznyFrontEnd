import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { TestServiceService } from '../test-service.service';
import { Produkt } from './produkt';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.scss'],
})
export class ProduktComponent implements OnInit {
  produkts: Produkt[] = [];
  obrazki: any;
  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';

  constructor(private produktService: TestServiceService) {}

  async ngOnInit() {
    await this.produktService
      .getProdukt()
      .then((data) => (this.produkts = data))
      .then();

    this.sortOptions = [
      { label: 'Cena malejąco', value: '!Cena' },
      { label: 'Cena rosnąco', value: 'Cena' },
    ];
    //await this.produkts.forEach((element) => {
    //  this.produktService.GetPhoto(element.obrazek).then((data) =>(element.file = data))
    //  console.log(element.Nazwa);
    //});
  }
  
  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  singleProduct(produkt: Produkt) {}
}
