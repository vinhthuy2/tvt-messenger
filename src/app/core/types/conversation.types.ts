import { ChatMessage } from './message.types';
import { User } from './user.types';

export interface Conversation {
  id: string;
  participants: User[];
  messages: ChatMessage[];
  lastMessage: ChatMessage | null;
  lastMessageTimestamp: Date | null;
  unreadMessageCount: number;
  isArchived: boolean;
  isMuted: boolean;
  isPinned: boolean;
  isGroup: boolean;
  groupInfo: {
    name: string;
    avatar: string;
  };
}
