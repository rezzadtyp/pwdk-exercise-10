export interface User {
  objectId: string;
  name: string;
  email: string;
  password: string;
  blogs: Blog[];
}

export interface Blog {
  objectId: string;
  title: string;
  description: string;
  userId: string;
  created: string;
  updated: string;
}
