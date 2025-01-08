/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "@phosphor-icons/react";

import { Avatar } from "../../Avatar/Avatar";

import styles from "./Comment.module.css";

export function Comment({ id, content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(id);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/9437391?v=4"
        userName="User Name"
        hasBorder={false}
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
            <button
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
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
