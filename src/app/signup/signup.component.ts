import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
gender:string[];
user:User;
  constructor() { }

  ngOnInit() {
    this.gender=['male','female','others'];
    this.user = new User ({
      email:"",password: {pwd:"", confirmpwd: ""},
      gender:this.gender[0],terms:false
    });
  }

}
