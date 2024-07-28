import { createActionGroup, props } from '@ngrx/store';

export const TopConnectorActions = createActionGroup(
  {
    source: 'TopConnector',
    events: {
      connect: props<{ userId: string }>(),
      connected: props<{ userId: string }>(),
      connectionFailed: props<{ userId: string }>(),
      loadFriends: props<{ userId: string }>(),
      loadConversations: props<{ userId: string }>(),
    },
  },
);
