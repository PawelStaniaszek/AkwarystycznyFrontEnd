import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  login: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  tryLogin(){
    if(this.login =="admin" && this.password=="admin"){
      this.router.navigate(['/zalogowany']);
    }
  }
}
