import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { selectConnected } from '@app/components/top-connector/store/top-connector.selectors';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopConnectorComponent } from './components/top-connector/top-connector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LetDirective,
    RouterOutlet,
    ChatBoxComponent,
    SidebarComponent,
    TopConnectorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tvt-messenger';
  connected$ = this.store.select(selectConnected);

  constructor(private readonly store: Store) {
  }
}
