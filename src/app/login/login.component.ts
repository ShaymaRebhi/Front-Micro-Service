import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  test : Date = new Date();
  focus: any;
  focus1: any;
  constructor(private router:Router ) { }

  ngOnInit() {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUserDetails().roles;
    //
    // }
  }
  onSubmit(): void {

    // this.userComponentStore.login(this.form)
  }
}
