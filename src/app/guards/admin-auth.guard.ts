import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../home/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(): boolean {
    if(this.authService.IsAdminLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['home/auth'])
      return false;
    }
  }
  
}
