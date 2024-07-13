import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatBoxComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tvt-messenger';
}
