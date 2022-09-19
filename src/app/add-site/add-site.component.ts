import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {

  constructor(private router: Router) { }

  items2: MenuItem[] = [];
  title = 'Sklep Akwarystyczny';
  searchValue: String = "";
  ngOnInit() {
    this.items2 = [
      {
          label: 'Akcesoria',command: (event) => {
            this.router.navigate(['/']);
        }

      },
      {
          label: 'Akwaria',

      },
      {
        label: 'Rośliny',
      },
      {
      label: 'Oświetlenie',
      },
      {
    label: 'Filtracja',
    },
    {
    label: 'Napowietrzenie',
    },
    {
     label: 'Pokarmy',
    },
    {
     label: 'Podłoża',
    },
    {
     label: 'Testy',
    } ,
    {
      label: 'Preparaty',
    }
  ];

}

  }


