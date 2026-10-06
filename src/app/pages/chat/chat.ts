import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { OrdinalDatePipe } from '../../pipes/ordinal-date.pipe';
import { ChatService } from './chat.service';
import { ChatListItem, ChatMessage, ChatUserDetails } from './chat.model';
import { Conversation } from './conversation/conversation';

@Component({
  selector: 'app-chat',
  imports: [Navbar, OrdinalDatePipe,Conversation],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat implements OnInit {
  chatsList: ChatListItem[] = [];
  selectedChatId: string | null = null;
  selectedConversation: ChatMessage[] = [];
  userDetails: ChatUserDetails | null = null;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getChatsList().subscribe((chats) => {
      this.chatsList = chats;
    });
  }

  getLatestMessage(messages: ChatMessage[]): ChatMessage {
    return messages.reduce((latest, current) =>
      new Date(current.dateTime) > new Date(latest.dateTime) ? current : latest
    );
  }

  getChatConversation(chatId: string, recepientName:string, avatar:string): void {
    this.selectedChatId = chatId;
    this.userDetails = {avatar,recepientName};
    this.chatService.getConversation(chatId).subscribe((messages) => {
      this.selectedConversation = messages;
    });
  }
}
