import { CanActivateChild, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivateChild {
  constructor(private router: Router) {}

  canActivateChild():
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    let isLoggedIn = sessionStorage.getItem('userData')
      ? true
      : this.router.createUrlTree(['/login']);
    return isLoggedIn;
  }
}
