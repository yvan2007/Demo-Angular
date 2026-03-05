import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const request = req.clone({
    setHeaders: {
      Accept: 'application/json'
    }
  });

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      const message = error.error?.message || error.message || 'Une erreur reseau est survenue.';
      return throwError(() => new Error(message));
    })
  );
};
