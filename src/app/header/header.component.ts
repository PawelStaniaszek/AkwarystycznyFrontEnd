import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = 
    [
      {

        label: 'Strona główna',command: (event) => {
          this.router.navigate(['/']);
        }
      },
      {
          label: 'Kontakt',
          icon: 'pi pi-fw pi-info-circle',
      },
      {
        label: 'Koszyk',
        icon: 'pi pi-fw pi-shopping-cart',command: (event) => {
          this.router.navigate(['/login']);
        }
      },
      {
      label: 'Zaloguj',
      icon: 'pi pi-fw pi-sign-in',command: (event) => {
        this.router.navigate(['/login']);
      }
    },
    {
    label: 'Rejestracja',
      icon: 'pi pi-fw pi-send',command: (event) => {
        this.router.navigate(['/register']);
      }
    },
  ];
  }

}
