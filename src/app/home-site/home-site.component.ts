import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-site',
  templateUrl: './home-site.component.html',
  styleUrls: ['./home-site.component.css']
})
export class HomeSiteComponent implements OnInit {

  title = 'Sklep Akwarystyczny';
  searchValue: String = "";
  private _router: Router;
  constructor(private router: Router) {
    this._router = router;
   }

  ngOnInit() {

    if(sessionStorage["token"] !=null){
      this._router.navigate(["/zalogowany"]);
    }


}}

