import { ChatMessage } from '@core/types';
import { Conversation } from '@core/types/conversation.types';
import { createActionGroup, props } from '@ngrx/store';

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
