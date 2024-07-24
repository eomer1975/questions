import { inject, Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { NotificationService } from "../services/notification/notification.service"
import { tap } from "rxjs"
import { ErrorActions } from "./actions"



@Injectable({
    providedIn: 'root'
 })
 export class ErrorEffects {
 
    private readonly actions$ = inject(Actions)
 
    private readonly notificationService = inject(NotificationService)
 
    error$ = createEffect(() => this.actions$.pipe(
       ofType(ErrorActions.catchHttpError),
       tap((x) => this.notificationService.openToastError$.next(x.error.message))
    ), { dispatch: false })
 }