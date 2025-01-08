/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { CommentForm } from "./CommentForm";
import { Comment } from "./Comment";
import { Avatar } from "../Avatar/Avatar";

import styles from "./Post.module.css";

export function Post({ author, content, tags, publishedAt }) {
  const publishedDateFormated = format(publishedAt, "dd 'de' MMMM 'às' HH:mm", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const formattedContent = content.map((line, index) => {
    if (line.type === "paragraph") {
      return <p key={index}>{line.content}</p>;
    } else if (line.type === "link") {
      return (
        <p key={index}>
          <a href="#">{line.content}</a>
        </p>
      );
    }
  });

  const tagList = tags.map((tag, index) => (
    <a
      key={index}
      href={`#${tag}`}
    >{`#${tag}`}</a>
  ));

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
          dateTime={publishedAt.toISOString()}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {formattedContent}
        <p className={styles.tags}>{tagList}</p>
      </div>

      <CommentForm />

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
