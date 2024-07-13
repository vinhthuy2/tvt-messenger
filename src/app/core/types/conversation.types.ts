import { ChatMessage } from '@app/core/types/message.types';
import { User } from '@app/core/types/user.types';

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
