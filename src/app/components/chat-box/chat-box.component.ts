import { Component } from '@angular/core';
import { ChatPanelComponent } from './chat-panel/chat-panel.component';

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [
    ChatPanelComponent
  ],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss'
})
export class ChatBoxComponent {

}
