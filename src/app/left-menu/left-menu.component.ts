import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  items2: MenuItem[] = [];
  constructor(private router: Router) { }

  searchByCategory(a: String){
    this.router.navigate(['kategoria',a]);
  }
  ngOnInit(): void {
    this.items2 = [
      {
          label: 'Akcesoria',command: (event) => {
            this.searchByCategory('Akcesoria');
        }

      },
      {
          label: 'Akwaria',command: (event) => {
            this.searchByCategory('Akwaria');
        }

      },
      {
        label: 'Rośliny',command: (event) => {
          this.searchByCategory('Rośliny');
      }
      },
      {
      label: 'Oświetlenie',command: (event) => {
        this.searchByCategory('Oświetlenie');
    }
      },
      {
    label: 'Filtracja',command: (event) => {
      this.searchByCategory('Filtracja');
  }
    },
    {
    label: 'Napowietrzenie',command: (event) => {
      this.searchByCategory('Napowietrzenie');
  }
    },
    {
     label: 'Pokarmy',command: (event) => {
      this.searchByCategory('Pokarmy');
  }
    },
    {
     label: 'Podłoża',command: (event) => {
      this.searchByCategory('Podłoża');
  }
    },
    {
     label: 'Testy',command: (event) => {
      this.searchByCategory('Testy');
  }
    } ,
    {
      label: 'Preparaty',command: (event) => {
        this.searchByCategory('Preparaty');
    }
    }
  ];
}

}


