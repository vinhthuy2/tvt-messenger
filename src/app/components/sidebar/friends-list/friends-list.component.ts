import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FriendListItemComponent,
} from '@app/components/sidebar/friends-list/friend-list-item/friend-list-item.component';
import { User } from '@app/core/types';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    FriendListItemComponent,
  ],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.scss',
})
export class FriendsListComponent {
  friends$: Observable<User[]> = of([
    {
      id: '1',
      name: 'John Doe',
      isOnline: true,
      lastSeen: new Date(),
      email: 'asa@cc.c',
    },
    {
      id: '2',
      name: 'Jane Doe',
      isOnline: false,
      lastSeen: new Date(),
      email: 'asa@cc.c',
    },
    {
      id: '3',
      name: 'John Doe',
      isOnline: true,
      lastSeen: new Date(),
      email: 'asa@cc.c',
    },
    {
      id: '4',
      name: 'Jane Doe',
      isOnline: false,
      lastSeen: new Date(),
      email: 'asa@cc.c',
    },
  ]);
}
