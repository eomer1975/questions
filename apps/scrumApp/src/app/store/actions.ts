import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Ask, AskList } from "../models/ask";
import { ErrorInfo } from "./state";

export const questActions = createActionGroup({
    source: 'Search',
    events: {
        'Init': emptyProps(),
        'Init Result': props<{ askList: AskList }>(),
        'Load Ask': props<{ id: number }>(),
        'Ask Result': props<{ ask: Ask }>()
    }
})

export const ErrorActions = createActionGroup({
    source: 'Catalogue',
    events: {
       'Catch Http Error': props<{ error: ErrorInfo }>()
    }
 })