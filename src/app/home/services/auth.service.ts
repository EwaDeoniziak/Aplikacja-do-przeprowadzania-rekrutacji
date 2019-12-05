import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedInObs = new BehaviorSubject<boolean>(true);
  constructor() {
  }
  changeIsLoggedIn(value: boolean) {
    this.isLoggedInObs.next(value);
    this.isLoggedInObs.subscribe(el => console.log(el));
  }
  
}
