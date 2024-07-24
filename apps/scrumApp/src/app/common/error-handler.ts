import { HttpErrorResponse } from "@angular/common/http"
import { Store } from "@ngrx/store"
import { catchError, of, pipe } from "rxjs"
import { ErrorActions } from "../store/actions"

export const errorPipe = (store: Store, showError: boolean, customMessageError?: string) => pipe(
   catchError((err: HttpErrorResponse) => {
      if (showError)
         errorHandler(store, messageErrorHandler(err.status, customMessageError), err.status, err.statusText, err.url)
      return of(null as any)
   }),
)

function messageErrorHandler(code: number, customMessage?: string): string {
   if (customMessage)
      return customMessage
   else {

      const message = $localize`:@@generic-error-message:Something went wrong`

      switch (code) {

         // case 401:
         //   return $localize`:@@error-unauthorized:Unauthorized`
         case 400:
            return $localize`:@@error-bad-request:Bad request`
         // case 404:
         //   return $localize`:@@error-not-found:Not found`
         case 415:
         case 403:
         default:
            return message
      }
   }
}

function errorHandler(store: Store, errorMessage: string, code: number, statusCode: string, url: string | null) {

   store.dispatch(ErrorActions.catchHttpError({
      error: {
         code,
         statusCode,
         message: errorMessage,
         url
      }
   }))
}