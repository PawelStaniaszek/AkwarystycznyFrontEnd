import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-home-site',
  templateUrl: './home-site.component.html',
  styleUrls: ['./home-site.component.css']
})
export class HomeSiteComponent implements OnInit {

  title = 'Sklep Akwarystyczny';
  searchValue: String = "";
  ngOnInit() {


}}

