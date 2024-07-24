import { ErrorInfo, ErrorState } from "./state"


export function addErrorToState(state: ErrorState, error: ErrorInfo): ErrorState {

    if (!state.errors)
        return {
            errors: [error]
        }
    else {

        const errors: ErrorInfo[] = [...state.errors]
        // if (errors.length >= 5) SE VOGLIO LIMITARE L'ARRAY DEGLI ERRORI
        //    errors.shift()

        errors.push(error)

        return {
            errors
        }
    }
}