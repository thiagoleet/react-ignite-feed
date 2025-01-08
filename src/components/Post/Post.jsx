/* eslint-disable react/prop-types */
import React from "react";

import { CommentForm } from "./CommentForm";
import { Comment } from "./Comment";
import { Avatar } from "../Avatar/Avatar";

import { useFormatDate } from "../../hooks/useFormatDate";

import styles from "./Post.module.css";

export function Post({ author, content, tags, publishedAt }) {
  const [comments, setComments] = React.useState([]);
  const [publishedDateFormated, publishedDateRelativeToNow, ISODate] =
    useFormatDate(publishedAt);

  function handleAddNewComment(comment) {
    setComments((prevComments) => [...prevComments, comment]);
  }

  function deleteComment(id) {
    const commentsWithoutDeleted = comments.filter(
      (comment) => comment.id !== id
    );

    setComments(() => commentsWithoutDeleted);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
            userName={author.name}
            hasBorder
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormated}
          dateTime={ISODate}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.id}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.id}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
        <p className={styles.tags}>
          {tags.map((tag) => (
            <a
              key={tag}
              href={`#${tag}`}
            >{`#${tag}`}</a>
          ))}
        </p>
      </div>

      <CommentForm onAddNewComment={handleAddNewComment} />

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            content={comment.content}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
