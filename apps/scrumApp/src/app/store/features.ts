import { createFeature } from "@ngrx/store";
import { questReducer } from "./reducers";

export const questFeature = createFeature({
    name: 'quest',
    reducer: questReducer
 })