import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://avatars.githubusercontent.com/u/9437391?v=4"
        alt="User Name"
        className={styles.avatar}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>John Doe</strong>
              <time
                title="01 de Janeiro às 10:46"
                dateTime="2025-01-08 10:46:27"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            magni praesentium quos delectus. Ab repudiandae molestiae quis,
            provident nulla temporibus facere ullam asperiores dolorem
            voluptatibus dolore, quibusdam et consequatur soluta!
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>(20)</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
