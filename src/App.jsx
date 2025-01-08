import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

import "./styles/global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
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
        </main>
      </div>
    </>
  );
}
