import { Ask, AskList } from "../models/ask";

export interface QuestState {
    askList: AskList;
    currId: number | null,
    currAsk: Ask | null
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