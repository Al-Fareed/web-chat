export interface FeedPost {
  id: string;
  userId: string;
  userName: string;
  userAvatarUrl: string;
  imageUrl: string | null;
  blog: string;
  likesCount: number;
  likedByCurrentUser: boolean;
  createdAt: string;
}
