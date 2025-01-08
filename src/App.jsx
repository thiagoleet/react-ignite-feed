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
      { type: "paragraph", content: "Hello World" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum nemo ad molestiae quasi mollitia deleniti deserunt, laboriosam quibusdam, blanditiis est sit, minus nobis tempore quas impedit quo. Voluptatem, adipisci!",
      },
      { type: "link", content: "john.doe/post-content" },
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
      { type: "paragraph", content: "Hello World" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum nemo ad molestiae quasi mollitia deleniti deserunt, laboriosam quibusdam, blanditiis est sit, minus nobis tempore quas impedit quo. Voluptatem, adipisci!",
      },
      { type: "link", content: "john.doe/post-content" },
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
