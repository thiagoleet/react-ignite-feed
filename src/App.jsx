import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./styles/global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: "8f289331-c5a2-4bbe-87d8-8d17dc5f8b20",
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/9437391?v=4",
      name: "Thiago Leite",
      role: "Software Engineer",
    },
    content: [
      {
        id: "dea6db60-ca44-4a0e-8c99-0c07bb54ca54",
        type: "paragraph",
        content: "Hello World",
      },
      {
        id: "5c146b09-5540-43ea-8ed9-ab052e1adce8",
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum nemo ad molestiae quasi mollitia deleniti deserunt, laboriosam quibusdam, blanditiis est sit, minus nobis tempore quas impedit quo. Voluptatem, adipisci!",
      },
      {
        id: "d8471403-2824-4f67-88a4-3bed3a73c412",
        type: "link",
        content: "john.doe/post-content",
      },
    ],
    tags: ["webdevelopment", "javascript", "react", "nodejs"],
    publishedAt: new Date("2025-01-08 10:46:27"),
  },
  {
    id: "3078e148-2290-4b1d-af0a-3c93d55000b3",
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/7413734?v=4",
      name: "Israel Soares",
      role: "Astronomy Student",
    },
    content: [
      {
        id: "90f47ae4-8e91-47e1-aeba-e772aa045eb0",
        type: "paragraph",
        content: "Hello World",
      },
      {
        id: "d6134cca-ae0e-4125-bc64-c626f2801581",
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum nemo ad molestiae quasi mollitia deleniti deserunt, laboriosam quibusdam, blanditiis est sit, minus nobis tempore quas impedit quo. Voluptatem, adipisci!",
      },
      {
        id: "1f583d79-70b4-4710-8d1f-ec9b64e279a9",
        type: "link",
        content: "john.doe/post-content",
      },
    ],
    tags: ["vue", "nuxt", "frontend"],
    publishedAt: new Date("2025-01-08 10:46:27"),
  },
];

export function App() {
  const postList = posts.map((post) => (
    <Post
      key={post.id}
      author={post.author}
      content={post.content}
      tags={post.tags}
      publishedAt={post.publishedAt}
    />
  ));

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>{postList}</main>
      </div>
    </>
  );
}
