import { inject, Injectable } from "@angular/core"
import { act, Actions, createEffect, ofType } from "@ngrx/effects"
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { NotificationService } from "../services/notification/notification.service"
import { tap } from "rxjs"
import { ErrorActions, questActions } from "./actions"
import { QuestionsService } from "../services/questions/questions.service"

@Injectable({ providedIn: 'root' })
export class QuestEffects {
   
   private readonly actions$ = inject(Actions)
   private readonly searchService = inject(QuestionsService)

   getAllQuestions$ = createEffect(() => this.actions$.pipe(
    ofType(questActions.init),
    exhaustMap(action => this.searchService.getAskList$().pipe(
       map(result => questActions.initResult({ askList: result ?? [] })),
       catchError(err => {
          console.error("ERROR getAllQuestions$ EFFECTS", err)
          return EMPTY
       })
    ))
 ))
}

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