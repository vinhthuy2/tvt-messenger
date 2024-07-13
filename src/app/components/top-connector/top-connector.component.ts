import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TopConnectorActions } from './store/top-connector.actions';

@Component({
  selector: 'app-top-connector',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './top-connector.component.html',
  styleUrl: './top-connector.component.scss',
})
export class TopConnectorComponent {
  userId = '';
  isConnected = false;

  constructor(private readonly store: Store) {
  }

  onConnect() {
    this.isConnected = true;
    this.store.dispatch(TopConnectorActions.connect({ userId: this.userId }));
  }
}
