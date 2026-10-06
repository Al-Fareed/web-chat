export interface ChatMessage {
  messageId: string;
  dateTime: string;
  message: string;
  sender: string;
}

export interface ChatListItem {
  chatId: string;
  avatar: string;
  recepientName: string;
  totalUnreadMessages: number;
  lastMessages: ChatMessage[];
}

export interface ChatUserDetails {
  avatar: string;
  recepientName: string;
}
