import { inject, Injectable } from "@angular/core"
import { act, Actions, createEffect, ofType } from "@ngrx/effects"
import { EMPTY, catchError, exhaustMap, map, withLatestFrom } from "rxjs";
import { NotificationService } from "../services/notification/notification.service"
import { tap } from "rxjs"
import { ErrorActions, questActions } from "./actions"
import { QuestionsService } from "../services/questions/questions.service"
import { select, Store } from "@ngrx/store";

@Injectable({ providedIn: 'root' })
export class QuestEffects {

    private readonly store = inject(Store)
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

    getQuestion$ = createEffect(() => this.actions$.pipe(
        ofType(questActions.loadAsk),
        exhaustMap(action => this.searchService.getAsk$(action.id).pipe(
            map(result => questActions.askResult({ ask: result ?? [] })),
            catchError(err => {
                console.error("ERROR getQuestion$ EFFECTS", err)
                return EMPTY
            })
        ))
    ))

    showHideCoorect = createEffect(() => this.actions$.pipe(
        ofType(questActions.showHideCorrect)
    ),
        { dispatch: false }
    )

    giveAnswer = createEffect(() => this.actions$.pipe(
        ofType(questActions.giveAnswer)
    ),
        { dispatch: false }
    )
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