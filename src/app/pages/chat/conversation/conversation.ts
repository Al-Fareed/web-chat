import { Component, Input } from '@angular/core';
import { ChatMessage, ChatUserDetails } from '../chat.model';

@Component({
  selector: 'app-conversation',
  imports: [],
  templateUrl: './conversation.html',
  styleUrl: './conversation.css',
})
export class Conversation {
  @Input() messages: ChatMessage[] = [];
  @Input() userDetails: ChatUserDetails | null = null;
}
