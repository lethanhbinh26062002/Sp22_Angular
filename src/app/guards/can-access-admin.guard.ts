import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(private router: Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // 1 Lấy thông tin trong localStorage
      const loggedInUser = localStorage.getItem('loggedInUser');
      // 2 Kiểm tra thông tin
      if(loggedInUser){
        return true;
      }
      // 3 Điều hướng
      this.router.navigateByUrl('/login');
    return true;
  }

}
