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
    });
    this.authService.properData.subscribe( el => {this.properData = el; console.log(this.properData); } );
  }

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
  changeIsLoggedIn(value: boolean) {
    this.authService.changeIsLoggedIn(value);
  }
  test1(login, password) {
    this.authService.login(this.login1, this.password1);
  }

  register() {
    const user: RegisterUser = {name: this.name, email: this.email, password: this.password, c_password: this.c_password }
    
    this.authService.Register(user).subscribe(res => {
      this.message = 'Zostałeś zarejstrowany do serwisu!';
      this.openSnackBar();
      
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
    
  }
}
