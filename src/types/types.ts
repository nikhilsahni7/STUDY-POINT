// types.ts
export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  collegeName: string | null;
  currentSemester: number | null;
  username: string | null;
  branch: string | null;
  course: string | null;
}

export interface Discussion {
  id: string;
  title: string;
  question: string;
  createdAt: string;
  userId: string;
  user: User;
  replies: Reply[];
}

export interface Reply {
  id: string;
  answer: string;
  createdAt: string;
  userId: string;
  discussionId: string;
}
