import { createActionGroup, props } from '@ngrx/store';
import { ChatMessage, Conversation } from '../../../core/types';

export const ChatBoxActions = createActionGroup(
  {
    source: 'ChatBox',
    events: {
      conversationLoaded: props<{ conversation: Conversation }>(),
      messageReceived: props<{ message: ChatMessage }>(),
      messageSent: props<{ messageId: string }>(),
      messageRead: props<{ messageId: string }>(),
      someoneTyping: props<{ sender: string }>(),
      sendMessage: props<{ message: ChatMessage }>(),
    },
  },
);
