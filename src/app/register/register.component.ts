import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { RequestService } from '../RequestService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  constructor(private service: RequestService) { 
    this.user = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
    }
  }

  ngOnInit(): void {
  }

  tryRegister(){
    this.service.register(this.user).subscribe(val => {
      alert("Konto utworzone");
    })
  }


}
