import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FeedPost } from './feed.model';

const DUMMY_FEED_DATA: FeedPost[] = [
  {
    id: 'post-1',
    userId: 'user-101',
    userName: 'Ava Thompson',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=1',
    imageUrl: 'https://picsum.photos/seed/post1/600/400',
    blog: 'Just wrapped up a redesign of our onboarding flow. Small changes, big impact on drop-off rates!',
    likesCount: 24,
    likedByCurrentUser: false,
    createdAt: '2026-08-24T08:30:00Z',
  },
  {
    id: 'post-2',
    userId: 'user-104',
    userName: 'Marcus Webb',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=4',
    imageUrl: null,
    blog: 'Hot take: dark mode should be the default, not an afterthought.',
    likesCount: 57,
    likedByCurrentUser: true,
    createdAt: '2026-08-25T07:00:00Z',
  },
  {
    id: 'post-3',
    userId: 'user-105',
    userName: 'Sofia Ramirez',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=5',
    imageUrl: 'https://picsum.photos/seed/post3/600/400',
    blog: 'Shipped the new chat notification system today. Real-time updates finally feel instant.',
    likesCount: 12,
    likedByCurrentUser: false,
    createdAt: '2026-08-25T11:20:00Z',
  },
  {
    id: 'post-4',
    userId: 'user-106',
    userName: 'Ethan Brooks',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=6',
    imageUrl: 'https://picsum.photos/seed/post4/600/400',
    blog: 'Weekend project: built a small CLI tool to auto-format commit messages. Open sourcing it soon.',
    likesCount: 8,
    likedByCurrentUser: false,
    createdAt: '2026-08-26T05:40:00Z',
  },
  {
    id: 'post-5',
    userId: 'user-107',
    userName: 'Nina Patel',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=7',
    imageUrl: 'https://picsum.photos/seed/post5/600/400',
    blog: 'Refactored our message pagination to use cursor-based loading instead of offset. Scroll performance is night and day.',
    likesCount: 41,
    likedByCurrentUser: false,
    createdAt: '2026-08-26T13:50:00Z',
  },
  {
    id: 'post-6',
    userId: 'user-108',
    userName: 'Owen Baxter',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=8',
    imageUrl: null,
    blog: 'Reminder to yourself and your team: a green checkmark on CI does not mean the feature actually works. Go click through it.',
    likesCount: 33,
    likedByCurrentUser: true,
    createdAt: '2026-08-26T17:45:00Z',
  },
  {
    id: 'post-7',
    userId: 'user-109',
    userName: 'Grace Lin',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=9',
    imageUrl: 'https://picsum.photos/seed/post7/600/400',
    blog: 'Our design system finally has dark mode tokens for every component. Took three sprints but worth it.',
    likesCount: 19,
    likedByCurrentUser: false,
    createdAt: '2026-08-27T06:00:00Z',
  },
  {
    id: 'post-8',
    userId: 'user-101',
    userName: 'Ava Thompson',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=1',
    imageUrl: 'https://picsum.photos/seed/post8/600/400',
    blog: 'Small usability win: added optimistic UI updates when sending a message, so it appears instantly instead of waiting on the server round trip.',
    likesCount: 62,
    likedByCurrentUser: true,
    createdAt: '2026-08-27T08:00:00Z',
  },
];

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  getFeed(): Observable<FeedPost[]> {
    return of(DUMMY_FEED_DATA);
  }

  createPost(blog: string, imageUrl: string): Observable<FeedPost> {
    const newPost: FeedPost = {
      id: `post-${Date.now()}`,
      userId: 'current-user',
      userName: 'You',
      userAvatarUrl: '',
      imageUrl: imageUrl || null,
      blog,
      likesCount: 0,
      likedByCurrentUser: false,
      createdAt: new Date().toISOString(),
    }
    DUMMY_FEED_DATA.unshift(newPost);
    return of(newPost);
  }

  getPostById(postId: string): Observable<FeedPost | undefined> {
    return of(DUMMY_FEED_DATA.find((post) => post.id === postId));
  }
}
