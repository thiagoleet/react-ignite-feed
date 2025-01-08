/* eslint-disable react/prop-types */
import React from "react";

import styles from "./CommentForm.module.css";

export function CommentForm({ onAddNewComment }) {
  const [newCommentText, setNewCommentText] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddNewComment({
      id: crypto.randomUUID(),
      content: newCommentText,
    });

    event.target.reset();
  }

  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value);
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <strong>Deixe seu feedback</strong>

      <textarea
        name="comment"
        onChange={handleNewCommentChange}
        placeholder="Deixe um comentário"
      />

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>
  );
}
