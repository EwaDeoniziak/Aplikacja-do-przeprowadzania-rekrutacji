import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterUser } from 'src/app/shared/interfaces';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  //SPINNER
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { 
    this.authService.spinnerActive.subscribe(el =>{ this.spinnerActive = el;
      console.log(this.spinnerActive);
    });
    this.authService.properData.subscribe( el => {this.properData = el; console.log(this.properData); } );
  }

  // email1 = new FormControl('', [Validators.required, Validators.email]);
  // email2 = new FormControl('', [Validators.required, Validators.email]);
  // password1 = new FormControl('', [Validators.required]);
  // password2 = new FormControl('', [Validators.required]);
  // password3 = new FormControl('', [Validators.required]);
  hide = true;
  spinnerActive: boolean;
  properData: boolean;
  email: string;
  password: string;
  c_password: string;
  name: string;

  login1: string;
  password1: string;

  ngOnInit() {
  }

  // getErrorEmail1Message() {
  //   return this.email1.hasError('required') ? 'Musisz wprowadzić wartość' :
  //       this.email1.hasError('email') ? 'Nieprawidłowy e-mail' :
  //           '';
  // }
  // getErrorEmail2Message() {
  //   return this.email2.hasError('required') ? 'Musisz wprowadzić wartość' :
  //       this.email2.hasError('email') ? 'Nieprawidłowy e-mail' :
  //           '';
  // }
  // getErrorPassword1Message() {
  //   return this.password1.hasError('required') ? 'Musisz wprowadzić wartość' : '';
  // }
  // getErrorPassword2Message() {
  //   return this.password2.hasError('required') ? 'Musisz wprowadzić wartość' : '';
  // }
  // getErrorPassword3Message() {
  //   return this.password3.hasError('required') ? 'Musisz wprowadzić wartość' : '';
  // }
  changeIsLoggedIn(value: boolean) {
    this.authService.changeIsLoggedIn(value);
  }
  test1(login, password) {
    this.authService.login(this.login1, this.password1);
  }

  register() {
    const user: RegisterUser = {name: this.name, email: this.email, password: this.password, c_password: this.c_password }
    console.log(user);
    this.authService.Register(user).subscribe(res => {
      this.message = 'Zostałeś zarejstrowany do serwisu!';
      this.openSnackBar();
      console.log(res);
    }, err => {
      this.message = 'Wprowadzone dane nie są poprawne';
      this.openSnackBar();
    });
  }

  //MODAL
  message = 'Ok';
  action = '';
  openSnackBar() {
    this._snackBar.open(this.message, this.action, {
      duration: 5000,
    });
    console.log(this.message, this.action);
  }
}
