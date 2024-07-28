import { createActionGroup, props } from '@ngrx/store';
import { User } from '../../../../core/types';

export const FriendsListActions = createActionGroup(
  {
    source: 'FriendsList',
    events: {
      loadFriends: props<{ userId: string }>(),
      friendsLoaded: props<{ friends: User[] }>(),
      friendsLoadFailed: props<{ userId: string }>(),
    },
  },
);
