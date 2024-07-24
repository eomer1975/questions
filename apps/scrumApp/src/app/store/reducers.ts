import { createReducer, on } from "@ngrx/store";
import { ErrorState, QuestState } from "./state";
import { ErrorActions, questActions } from "./actions";
import { addErrorToState } from "./helpers";

export const questInitialState: QuestState = {
    askList: [],
    currAsk: null,
    currId: null
}


export const searchReducer = createReducer(
    questInitialState,
    on(questActions.init, (state, { askList }): QuestState => ({
        ...state,
        askList: askList
    })),
    on(questActions.loadAsk, (state, { id }): QuestState => ({
        ...state,
        currId: id
    })),
    on(questActions.askResult, (state, { ask }): QuestState => ({
        ...state,
        currAsk: ask
    }))

)



export const errorsInitialState: ErrorState = {
    errors: undefined
 }
 
 export const errorReducer = createReducer(
    errorsInitialState,
 
    on(ErrorActions.catchHttpError, (state, { error }): ErrorState => addErrorToState(state, error)),
 
 )
