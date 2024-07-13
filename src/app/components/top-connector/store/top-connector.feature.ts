import { createFeature, createReducer, on } from '@ngrx/store';
import { TopConnectorActions } from './top-connector.actions';

export const topConnectorFeatureKey = 'topConnector';

export interface TopConnectorState {
  userId: string;
}

export const initialState: TopConnectorState = {
  userId: '',
};

export const reducer = createReducer<TopConnectorState>(
  initialState,
  on(TopConnectorActions.connect, (state, { userId }) => {
    console.log('TopConnectorActions.connect', userId);
    return {
      ...state, userId,
    };
  }),
);

export const topConnectorFeature = createFeature(
  {
    name: topConnectorFeatureKey,
    reducer,
  },
);

