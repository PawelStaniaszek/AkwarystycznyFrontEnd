import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Produkt } from '../produkt/produkt';
import { TestServiceService } from '../test-service.service';
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
  produkts: Produkt[] = [];
  currentRoute: string;
  constructor(
    private route: ActivatedRoute,
    private produktService: TestServiceService,private router: Router
  ) {this.currentRoute = "";
  this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          // Show progress spinner or progress bar
            this.produktService
            .getProduktByCategory(this.myParam)
            .then((data) => (this.produkts = data));
      }
  });}

  myParam: string;
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: String) => (this.myParam = params['category'])
    );

    this.produktService
      .getProduktByCategory(this.myParam)
      .then((data) => (this.produkts = data));


    this.sortOptions = [
      { label: 'Cena malejąco', value: '!Cena' },
      { label: 'Cena rosnąco', value: 'Cena' },
    ];
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
}
