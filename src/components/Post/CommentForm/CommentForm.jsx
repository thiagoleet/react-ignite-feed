/* eslint-disable react/prop-types */
import styles from "./CommentForm.module.css";

export function CommentForm({ onAddNewComment }) {
  function handleSubmit(event) {
    event.preventDefault();

    onAddNewComment({
      content: event.target.comment.value,
    });

    event.target.reset();
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <strong>Deixe seu feedback</strong>

      <textarea
        name="comment"
        placeholder="Deixe um comentário"
      />

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>
  );
}
