import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string | undefined;
  pass: string | undefined;
  confirmPassword: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.email);
    console.log(this.pass);
  }

}
