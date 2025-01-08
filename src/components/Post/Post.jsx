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
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
        <p className={styles.tags}>
          {tags.map((tag, index) => (
            <a
              key={index}
              href={`#${tag}`}
            >{`#${tag}`}</a>
          ))}
        </p>
      </div>

      <CommentForm onAddNewComment={handleAddNewComment} />

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            content={comment.content}
          />
        ))}
      </div>
    </article>
  );
}
