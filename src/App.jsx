import { Header } from "./components/Header";
import { Post } from "./Post";

import "./styles.css";

export function App() {
  return (
    <>
      <Header />
      <div>
        <Post
          title="Title 1"
          author="Diego Fernandes"
          content="Content content content"
        />
        <Post
          title="Title 2"
          author="Diego Fernandes"
          content="Content content content"
        />
      </div>
    </>
  );
}
