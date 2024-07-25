import { createActionGroup, createSelector, emptyProps, props } from "@ngrx/store";
import { Ask, AskList } from "../models/ask";
import { ErrorInfo } from "./state";
import { selectRouter } from "./selectors";
import { RouterStateUrl } from "../common/router-cutom-serializer";

export const questActions = createActionGroup({
    source: 'Search',
    events: {
        'Init': emptyProps(),
        'Init Result': props<{ askList: AskList }>(),
        'Load Ask': props<{ id: number }>(),
        'Ask Result': props<{ ask: Ask }>(),
        'Show Hide Correct': emptyProps(),
        'Hide Correct': emptyProps(),
        'Give Answer': props<{ value: boolean, position: number }>()
    }
})


export const ErrorActions = createActionGroup({
    source: 'Quest',
    events: {
        'Catch Http Error': props<{ error: ErrorInfo }>()
    }
})