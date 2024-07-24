import { createReducer, on } from "@ngrx/store";
import { ErrorState, QuestState } from "./state";
import { ErrorActions, questActions } from "./actions";
import { addErrorToState } from "./helpers";

export const questInitialState: QuestState = {
    askList: [],
    currAsk: null,
    currId: null,
    loading: false
}


export const questReducer = createReducer(
    questInitialState,
    on(questActions.init, (state): QuestState => ({
        ...state,
        loading: true
    })),
    on(questActions.initResult, (state, { askList }): QuestState => ({
        ...state,
        askList: askList,
        loading: false
    })),
    on(questActions.loadAsk, (state, { id }): QuestState => ({
        ...state,
        currId: id,
        loading: true
    })),
    on(questActions.askResult, (state, { ask }): QuestState => ({
        ...state,
        currAsk: ask,
        loading: false
    }))

)



export const errorsInitialState: ErrorState = {
    errors: undefined
 }
 
 export const errorReducer = createReducer(
    errorsInitialState,
 
    on(ErrorActions.catchHttpError, (state, { error }): ErrorState => addErrorToState(state, error)),
 
 )
