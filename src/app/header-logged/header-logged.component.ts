import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.css']
})
export class HeaderLoggedComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Strona główna',command: (event) => {
            this.router.navigate(['/zalogowany']);
          }
      },
      {
          label: 'Kontakt',
          icon: 'pi pi-fw pi-info-circle',
      },
      {
        label: 'Koszyk',
        icon: 'pi pi-fw pi-shopping-cart',
    },
    {
      label: 'Dodaj produkt',
      icon: 'pi pi-plus',command: (event) => {
        this.router.navigate(['/add']);
      }

    },
    {
      label: 'Wyloguj',
      icon: 'pi pi-fw pi-sign-in',command: (event) => {
        this.router.navigate(['/']);
      }
  },

  ];
  }

}
