import {CanActivateFn, RedirectCommand, Router} from '@angular/router';
import {AuthService} from '../mod4/auth-service';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.isLogged()) {
    return true;
  } else {
    // router.navigateByUrl("/detail/456")
    // return false;
    return new RedirectCommand(
      router.createUrlTree(["/detail", 456], {queryParams: {error: 1}})
    );
  }


};
