import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from "../common/router-cutom-serializer";
import { StoreRootState } from "./reducers";

export const selectRouter = createFeatureSelector<RouterStateUrl>('router');

export const getRouterState = (state: StoreRootState) => state.router;

export const getCurrentRouteState = createSelector(
  getRouterState,
  (state: fromRouter.RouterReducerState) => state.state
);