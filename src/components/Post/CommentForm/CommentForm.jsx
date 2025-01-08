import styles from "./CommentForm.module.css";

export function CommentForm() {
  return (
    <form className={styles.form}>
      <strong>Deixe seu feedback</strong>

      <textarea placeholder="Deixe um comentário" />

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>
  );
}
