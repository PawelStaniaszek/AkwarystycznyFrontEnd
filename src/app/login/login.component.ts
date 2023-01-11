import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../RequestService.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  login: string;
  private _router: Router
  constructor(private router: Router, private service: RequestService) {
    this._router = router;
   }

  ngOnInit(): void {
    if(sessionStorage["token"] !=null){
      this._router.navigate(["/zalogowany"]);
    }
  }
  tryLogin(){

    this.service.login(this.login, this.password).subscribe({next: (val) => {
      sessionStorage.setItem('token', val.token.toString())
      if(val.token.toString !=null){
        this._router.navigate(["/zalogowany"]);
      }
    }});
  }
}
