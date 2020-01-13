import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, RegisterUser, LoginUser } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //robocze
  users: User[] = [
    {login: 'user1', password: 'pass1', role: 1},
    {login: 'user2', password: 'pass2', role: 1},
    {login: 'admin1', password: 'pass3', role: 2},
    {login: 'admin2', password: 'pass4', role: 2},
  ];

  spinnerActive = new BehaviorSubject<boolean>(false);
  properData = new BehaviorSubject<boolean>(true);
  isLoggedInObs = new BehaviorSubject<boolean>(false);
  constructor(private router: Router, private http: HttpClient) {
  }
  changeIsLoggedIn(value: boolean) {
    this.isLoggedInObs.next(value);
    this.isLoggedInObs.subscribe(el => console.log(el));
  }

  // login(login: string, password: string) {
  //   this.users.map(value => {
  //     if (value.login === login && value.password === password) {

  //       ///zamiast tego map i if będzie po prostu zapytanie post, jeśli ok to właśnie to się stanie
  //       console.log('Zalogowany');
  //       this.changeIsLoggedIn(true);
  //       localStorage.setItem('token', '111112');
  //       if(value.role === 1) {
  //         localStorage.setItem('user','1');
  //         this.router.navigate(['../../userPanel']);
  //       } else if(value.role === 2) {
  //         localStorage.setItem('admin','2');
  //         this.router.navigate(['../../adminPanel']);
  //       }
  //     }
  //   });
  // }

   login(login, pass) {
     this.spinnerActive.next(true);
     this.properData.next(true);
     const loginUser: LoginUser = {email: login, password: pass};
     this.http.post<LoginResponse>("/api/login", loginUser)
     .subscribe(
        res => {
          console.log('Zalogowany');
          this.router.navigate(['../../userPanel']);

          this.changeIsLoggedIn(true);
          localStorage.setItem('token', res.success.token);
          this.spinnerActive.next(false);
          this.properData.next(true);
          console.log(res);
          if(res.success.role_id === 2){
            localStorage.setItem('user','1');
            this.router.navigate(['../../userPanel']);
          } else if(res.success.role_id === 1) {
            localStorage.setItem('admin','1');
            this.router.navigate(['../../adminPanel']);
          }
        // if(value.role === 1) {
        //   localStorage.setItem('user','1');
        //   this.router.navigate(['../../userPanel']);
        // } else if(value.role === 2) {
        //   localStorage.setItem('admin','2');
        //   this.router.navigate(['../../adminPanel']);
        // }
        }, err => {
          console.log(err);
          this.spinnerActive.next(false);
          this.properData.next(false);
       }
      );

      }
      test(login,pass) {
        this.router.navigate(['../../userPanel']);
      }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    this.router.navigate(['../../home/auth']);
  }

  IsLoggedIn(){
    if(localStorage.getItem('token')&&localStorage.getItem('user')){
      return true;
    }
    else {
      return false;
    }
  }
  IsAdminLoggedIn() {
    if(localStorage.getItem('token')&&localStorage.getItem('admin')){
      return true;
    }
    else {
      return false;
    }
  }

  Register(user: RegisterUser): Observable<RegisterUser> {
    return this.http.post<RegisterUser>('/api/register', user);
  }
}

export interface LoginResponse {
  success: {
    token: string;
    role_id: number;
  }
}
