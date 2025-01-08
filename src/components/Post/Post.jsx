import { CommentForm } from "./CommentForm";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://avatars.githubusercontent.com/u/9437391?v=4"
            alt="User Name"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="01 de Janeiro às 10:46"
          dateTime="2025-01-08 10:46:27"
        >
          Publicado há 1h
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
    </article>
  );
}
