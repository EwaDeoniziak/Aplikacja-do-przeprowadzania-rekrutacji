import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  email1 = new FormControl('', [Validators.required, Validators.email]);
  email2 = new FormControl('', [Validators.required, Validators.email]);
  password1 = new FormControl('', [Validators.required]);
  password2 = new FormControl('', [Validators.required]);
  password3 = new FormControl('', [Validators.required]);
  hide = true;

  ngOnInit() {
  }

  getErrorEmail1Message() {
    return this.email1.hasError('required') ? 'Musisz wprowadzić wartość' :
        this.email1.hasError('email') ? 'Nieprawidłowy e-mail' :
            '';
  }
  getErrorEmail2Message() {
    return this.email2.hasError('required') ? 'Musisz wprowadzić wartość' :
        this.email2.hasError('email') ? 'Nieprawidłowy e-mail' :
            '';
  }
  getErrorPassword1Message() {
    return this.password1.hasError('required') ? 'Musisz wprowadzić wartość' : '';
  }
  getErrorPassword2Message() {
    return this.password2.hasError('required') ? 'Musisz wprowadzić wartość' : '';
  }
  getErrorPassword3Message() {
    return this.password3.hasError('required') ? 'Musisz wprowadzić wartość' : '';
  }
  changeIsLoggedIn(value: boolean) {
    this.authService.changeIsLoggedIn(value);
  }
}
