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
    setNewCommentText("");
  }

  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value);
    event.target.setCustomValidity("");
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  const isNewCommentTextEmpty = newCommentText.trim().length === 0;

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
        onInvalid={handleNewCommentInvalid}
        required
      />

      <footer>
        <button
          type="submit"
          disabled={isNewCommentTextEmpty}
        >
          Publicar
        </button>
      </footer>
    </form>
  );
}
