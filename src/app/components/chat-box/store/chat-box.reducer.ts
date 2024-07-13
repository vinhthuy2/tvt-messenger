import { ChatBoxActions } from '@app/components/chat-box/store/chat-box.actions';
import { Conversation } from '@app/core/types/conversation.types';
import { createReducer, on } from '@ngrx/store';

export const CHAT_BOX_FEATURE_KEY = 'chatBox';
export const intialChatBoxState: Conversation = {
  id: '',
  participants: [],
  messages: [],
  lastMessage: null,
  lastMessageTimestamp: null,
  unreadMessageCount: 0,
  isArchived: false,
  isMuted: false,
  isPinned: false,
  isGroup: false,
  groupInfo: {
    name: '',
    avatar: ''
  }
};

export const chatBoxReducer = createReducer(
  intialChatBoxState,
  on(ChatBoxActions.conversationLoaded, (state, { conversation }) => conversation),
  on(
    ChatBoxActions.messageReceived,
    (state, { message }) => (
      {
        ...state,
        messages: [...state.messages, message],
      }
    )
  ),
  on(ChatBoxActions.messageSent, (state) =>
    (
      {
        ...state,
        messages: state.messages.map(message => {
          if (message.id === state.lastMessage?.id) {
            return { ...message, sent: true };
          }
          return message;
        })
      }
    )
  ),
  on(
    ChatBoxActions.messageRead,
    (state, { messageId }) =>
      ({
        ...state,
        messages: state.messages.map(message => {
          if (message.id === messageId) {
            return { ...message, read: true };
          }
          return message;
        })
      })
  ),
  on(ChatBoxActions.sendMessage, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message]
  })),
);
