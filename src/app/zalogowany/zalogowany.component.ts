import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-zalogowany',
  templateUrl: './zalogowany.component.html',
  styleUrls: ['./zalogowany.component.css']
})
export class ZalogowanyComponent implements OnInit {
  private _router: Router;
  constructor(router: Router) { 
    this._router = router;
  }

  ngOnInit(): void {
    if(sessionStorage["token"] ==null){
      this._router.navigate(["/"]);
    }
  }

}
