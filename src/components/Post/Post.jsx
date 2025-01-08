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
        <p>Hello World</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
          nemo ad molestiae quasi mollitia deleniti deserunt, laboriosam
          quibusdam, blanditiis est sit, minus nobis tempore quas impedit quo.
          Voluptatem, adipisci!
        </p>
        <p>
          <a href="#">john.doe/post-content</a>
        </p>
        <p className={styles.tags}>
          <a href="#">#webdevelopment</a>
          <a href="#">#javascript</a>
          <a href="#">#react</a>
          <a href="#">#nodejs</a>
        </p>
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
