import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Product } from '../../Models/Product';
import { RequestService } from '../RequestService.service';
import { Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'app-szukaj-kategoria',
  templateUrl: './szukaj-kategoria.component.html',
  styleUrls: ['./szukaj-kategoria.component.scss'],
})
export class SzukajKategoriaComponent implements OnInit {
  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;

  sortField: string = '';
  produkts: Product[] = [];
  currentRoute: string;
  constructor(
    private route: ActivatedRoute,
    private produktService: RequestService,private router: Router
  ) {
    this.route.queryParams.subscribe({next: (params) => {
      this.myParam = params.Kategoria;
      this.produktService.getProduktByCategoryName(this.myParam).subscribe({next: (val) => {this.produkts = val}});
  
      
  }});
    
  }

  myParam: String;
  ngOnInit(): void {
    this.sortOptions = [
      { label: 'Cena malejąco', value: '!price' },
      { label: 'Cena rosnąco', value: 'price' },
    ];
  }
  changeProducts(){
    
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
}
