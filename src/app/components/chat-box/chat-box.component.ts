import { Component } from '@angular/core';
import { ChatHeaderComponent } from '@app/components/chat-box/chat-header/chat-header.component';
import { ChatPanelComponent } from './chat-panel/chat-panel.component';

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [
    ChatPanelComponent,
    ChatHeaderComponent,
  ],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss',
})
export class ChatBoxComponent {

}
