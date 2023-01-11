import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router } from '@angular/router';
import { Category } from 'src/Models/Category';
import { RequestService } from '../RequestService.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  items: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
  menus: Array<MenuItem> = [];
  categories: Category[] = [];
  constructor(private router: Router, private service: RequestService) { 
    this.service.getCategories().subscribe({
      next: (menus: Array<Category>) => {
        var m: MenuItem[] = [];

        menus.forEach(c => {

          const item: MenuItem = {
            label: c.name.toString(),
            command: () =>{
              this.searchByCategory(c);
          }}

          m.push(item);
        });

        this.items.next(m);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  searchByCategory(a: Category){
    this.router.navigate(['kategoria'],{queryParams: {Kategoria: a.name}});
  }
  ngOnInit(): void {
    this.items.subscribe({
      next: (data: MenuItem[]) => this.menus = data
    });
}

}


