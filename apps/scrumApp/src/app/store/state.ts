import { Ask, AskList } from "../models/ask";
import { routerReducer } from "@ngrx/router-store";
import { errorReducer } from "./reducers";

export const AppState = {
   error: errorReducer,
   router: routerReducer
}
export interface QuestState {
    askList: AskList;
    currId: number | null,
    currAsk: Ask | null,
    loading: boolean,
    hideCorrect: boolean
}

export interface ErrorState {
    errors: ErrorInfo[] | undefined
}

export interface ErrorInfo {
    message: string
    code: number
    statusCode: string
    url: string | null
}