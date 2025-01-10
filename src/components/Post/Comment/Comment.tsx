import React from "react";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

import { Avatar } from "../../Avatar/Avatar";

import styles from "./Comment.module.css";

interface CommentProps {
  id: string;
  content: string;
  onDeleteComment: (id: string) => void;
}

export function Comment({ id, content, onDeleteComment }: CommentProps) {
  const [likesCount, setLikesCount] = React.useState(0);

  function handleDeleteComment() {
    if (id) {
      onDeleteComment(id);
    }
  }

  function handleLikeComment() {
    setLikesCount((prevLikesCount) => prevLikesCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/9437391?v=4"
        alt="User Name"
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
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>({likesCount})</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
