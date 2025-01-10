import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";
import { Avatar } from "../Avatar/Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="/developer-cover.jpg"
      />

      <div className={styles.profile}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/9437391?v=4"
          alt="John Doe"
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
