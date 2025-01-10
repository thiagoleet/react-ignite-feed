import { Author } from "./Author";

export interface PostContent {
  id: string;
  type: "paragraph" | "link";
  content: string;
}

export interface Post {
  id: string;
  author: Author;
  content: PostContent[];
  tags: string[];
  publishedAt: Date;
}
