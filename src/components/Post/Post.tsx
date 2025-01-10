/* eslint-disable react/prop-types */
import React from "react";

import { CommentForm } from "./CommentForm";
import { Comment } from "./Comment";
import { Avatar } from "../Avatar/Avatar";

import { useFormatDate } from "../../hooks/useFormatDate";
import { Post as PostData } from "../../models/Post";

import styles from "./Post.module.css";
import { Comment as CommentData } from "../../models/Comment";

interface PostProps {
  post: PostData;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = React.useState<CommentData[]>([]);
  const [publishedDateFormated, publishedDateRelativeToNow, ISODate] =
    useFormatDate(post.publishedAt);

  function handleAddNewComment(comment: CommentData) {
    setComments((prevComments) => [...prevComments, comment]);
  }

  function deleteComment(id: string) {
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
            src={post.author.avatarUrl}
            alt={post.author.name}
            hasBorder
          />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
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
        {post.content.map((line) => {
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
          {post.tags.map((tag) => (
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
