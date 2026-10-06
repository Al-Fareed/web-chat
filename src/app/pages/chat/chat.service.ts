import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatListItem, ChatMessage } from './chat.model';

const DUMMY_CHATS_LIST: ChatListItem[] = [
  {
    "chatId": "ca2a0642-5d62-46cd-a129-8e1425310154",
    "avatar": "https://i.pravatar.cc/150?img=1",
    "recepientName": "Ava Thompson",
    "totalUnreadMessages": 2,
    "lastMessages": [
      {
        "messageId": "51663b4f-7acc-4ad7-abf3-e260602e9c1c",
        "dateTime": "2026-09-20T14:02:00Z",
        "message": "Did you get a chance to look at the onboarding mockups?",
        "sender": "Ava Thompson"
      },
      {
        "messageId": "a561598a-99af-44ba-a6ec-7fc4c12afc37",
        "dateTime": "2026-09-20T14:05:00Z",
        "message": "Not yet, will check them after lunch",
        "sender": "me"
      }
    ]
  },
  {
    "chatId": "8fab1bc1-0bc7-484e-9b27-aff00ce5ba76",
    "avatar": "https://i.pravatar.cc/150?img=4",
    "recepientName": "Marcus Webb",
    "totalUnreadMessages": 0,
    "lastMessages": [
      {
        "messageId": "2e678ba2-4af2-48b1-a7bf-b5305bae11f7",
        "dateTime": "2026-09-19T09:30:00Z",
        "message": "Pushed the dark mode changes, let me know what you think",
        "sender": "Marcus Webb"
      },
      {
        "messageId": "d7aa8a3b-7507-4dc0-8e17-66a7845687e9",
        "dateTime": "2026-09-19T10:15:00Z",
        "message": "Looks great, merging it now",
        "sender": "me"
      }
    ]
  },
  {
    "chatId": "fe0355fd-da79-450e-9a97-7778e47a0024",
    "avatar": "https://i.pravatar.cc/150?img=5",
    "recepientName": "Sofia Ramirez",
    "totalUnreadMessages": 5,
    "lastMessages": [
      {
        "messageId": "dbf58505-6f0c-466e-a780-8fb9a961d5d6",
        "dateTime": "2026-09-21T08:12:00Z",
        "message": "The notification service is throwing errors again",
        "sender": "Sofia Ramirez"
      },
      {
        "messageId": "35916fee-e878-4c73-8eca-371d742baac9",
        "dateTime": "2026-09-21T08:20:00Z",
        "message": "Can you send me the stack trace?",
        "sender": "me"
      }
    ]
  },
  {
    "chatId": "be0c8fc7-20ae-4632-9b49-aa7c0767ce72",
    "avatar": "https://i.pravatar.cc/150?img=7",
    "recepientName": "Nina Patel",
    "totalUnreadMessages": 0,
    "lastMessages": [
      {
        "messageId": "4b950d0d-6709-435c-9f8c-6d0d1f7777a3",
        "dateTime": "2026-09-18T16:45:00Z",
        "message": "Thanks for the review, all comments addressed",
        "sender": "Nina Patel"
      }
    ]
  },
  {
    "chatId": "c0a017af-ab58-42e5-bc14-b21cf6ca34ac",
    "avatar": "https://i.pravatar.cc/150?img=8",
    "recepientName": "Owen Baxter",
    "totalUnreadMessages": 150,
    "lastMessages": [
      {
        "messageId": "f405850e-e56b-4e82-a6e7-0b14c8bc3195",
        "dateTime": "2025-09-21T07:05:00Z",
        "message": "Standup moved to 10am tomorrow",
        "sender": "Owen Baxter"
      }
    ]
  }
];

const DUMMY_CONVERSATIONS: Record<string, ChatMessage[]> = {
  "ca2a0642-5d62-46cd-a129-8e1425310154": [
    { "messageId": "44f4c6a9-345e-4adc-8678-48c603bd241a", "dateTime": "2026-09-20T13:40:00Z", "message": "Hey, got a minute?", "sender": "Ava Thompson" },
    { "messageId": "b7b48a4c-e238-49bb-9119-d79c64e444b5", "dateTime": "2026-09-20T13:41:00Z", "message": "Sure, what's up?", "sender": "me" },
    { "messageId": "20f406c9-7b7d-4da4-8cd1-8347ee563ba6", "dateTime": "2026-09-20T13:55:00Z", "message": "I put together some updated onboarding mockups", "sender": "Ava Thompson" },
    { "messageId": "51663b4f-7acc-4ad7-abf3-e260602e9c1c", "dateTime": "2026-09-20T14:02:00Z", "message": "Did you get a chance to look at the onboarding mockups?", "sender": "Ava Thompson" },
    { "messageId": "a561598a-99af-44ba-a6ec-7fc4c12afc37", "dateTime": "2026-09-20T14:05:00Z", "message": "Not yet, will check them after lunch", "sender": "me" }
  ],
  "8fab1bc1-0bc7-484e-9b27-aff00ce5ba76": [
    { "messageId": "78fa6020-5836-4240-876d-aea976d4588d", "dateTime": "2026-09-19T09:10:00Z", "message": "Working on the dark mode tokens now", "sender": "Marcus Webb" },
    { "messageId": "dca30858-789a-4442-a316-71444834cb04", "dateTime": "2026-09-19T09:25:00Z", "message": "Nice, take your time on it", "sender": "me" },
    { "messageId": "2e678ba2-4af2-48b1-a7bf-b5305bae11f7", "dateTime": "2026-09-19T09:30:00Z", "message": "Pushed the dark mode changes, let me know what you think", "sender": "Marcus Webb" },
    { "messageId": "d7aa8a3b-7507-4dc0-8e17-66a7845687e9", "dateTime": "2026-09-19T10:15:00Z", "message": "Looks great, merging it now", "sender": "me" }
  ],
  "fe0355fd-da79-450e-9a97-7778e47a0024": [
    { "messageId": "5063f957-5d74-4628-befe-ad55f97219a9", "dateTime": "2026-09-21T07:50:00Z", "message": "Seeing 500s on the notification service", "sender": "Sofia Ramirez" },
    { "messageId": "92cc1d28-2ab1-4e65-bd70-75462faf54fb", "dateTime": "2026-09-21T08:00:00Z", "message": "Since when?", "sender": "me" },
    { "messageId": "dbf58505-6f0c-466e-a780-8fb9a961d5d6", "dateTime": "2026-09-21T08:12:00Z", "message": "The notification service is throwing errors again", "sender": "Sofia Ramirez" },
    { "messageId": "35916fee-e878-4c73-8eca-371d742baac9", "dateTime": "2026-09-21T08:20:00Z", "message": "Can you send me the stack trace?", "sender": "me" }
  ],
  "be0c8fc7-20ae-4632-9b49-aa7c0767ce72": [
    { "messageId": "87067378-c480-41e0-88a0-960bd8f1b0a2", "dateTime": "2026-09-18T16:20:00Z", "message": "Left a few comments on the PR", "sender": "me" },
    { "messageId": "c5b49fa9-bf5c-49ae-8afc-86b1c29025d2", "dateTime": "2026-09-18T16:30:00Z", "message": "On it, thanks for the quick review", "sender": "Nina Patel" },
    { "messageId": "4b950d0d-6709-435c-9f8c-6d0d1f7777a3", "dateTime": "2026-09-18T16:45:00Z", "message": "Thanks for the review, all comments addressed", "sender": "Nina Patel" }
  ],
  "c0a017af-ab58-42e5-bc14-b21cf6ca34ac": [
    { "messageId": "23783655-1f7e-452a-8bdb-d0d07cbf4183", "dateTime": "2025-09-21T06:50:00Z", "message": "Morning, quick heads up", "sender": "Owen Baxter" },
    { "messageId": "280a08f5-0473-4293-9b58-9ea75b365173", "dateTime": "2025-09-21T06:55:00Z", "message": "Go ahead", "sender": "me" },
    { "messageId": "f405850e-e56b-4e82-a6e7-0b14c8bc3195", "dateTime": "2025-09-21T07:05:00Z", "message": "Standup moved to 10am tomorrow", "sender": "Owen Baxter" }
  ]
};

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  getChatsList(): Observable<ChatListItem[]> {
    return of(DUMMY_CHATS_LIST);
  }

  getConversation(chatId: string): Observable<ChatMessage[]> {
    return of(DUMMY_CONVERSATIONS[chatId] ?? []);
  }
}
