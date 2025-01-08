import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="/developer-cover.jpg"
      />

      <div className={styles.profile}>
        <img
          src="https://avatars.githubusercontent.com/u/9437391?v=4"
          alt="User Name"
          className={styles.avatar}
        />
        <strong>John Doe</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
