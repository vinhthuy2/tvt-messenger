import { createFeatureSelector, createSelector } from '@ngrx/store';
import { topConnectorFeatureKey, TopConnectorState } from './top-connector.feature';

const selectTopConnectorState = createFeatureSelector<TopConnectorState>(topConnectorFeatureKey);

export const selectUserId = createSelector(
  selectTopConnectorState,
  (state) => state.userId,
);
