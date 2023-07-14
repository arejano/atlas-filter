import { Injectable } from '@angular/core';
import { Observable, throwError, empty } from 'rxjs';
import { EnumValidationErrorType, IExceptionCommonError } from './filter.models';

@Injectable({
  providedIn: 'root',
})
export class HandleApiError {
  constructor(
    //private notificationService: NotificationService,
    //private translate: TranslateService,
  ) { }

  handleError<T>(operation = 'operation', result?: T) {
    return (data: any): Observable<T> => {
      const errors = data.errors || data.error.errors;
      for (const e of errors) {
        if (+e.code) {
          e.statusCode = e.statusCode ?? parseInt(e.code, 10);
        }

        switch (e.statusCode) {
          case EnumValidationErrorType.CommonError:
            const ERROR = e as IExceptionCommonError;
            // this.notificationService.showError(
              // `${this.translate.instant('app.defaults.error-message')}: ${ERROR.message}`
            // );
            break;
          case EnumValidationErrorType.UnauthorizedError:
          case EnumValidationErrorType.ForbiddenError:
            window.open(window.location.origin + '/portal', '_self');
            return null;
          default:
            // this.notificationService.showError(
              // this.translate.instant('app.defaults.error-message')
            // );
            return null;
        }
      }

      return throwError(errors);
    };
  }
}
