/* eslint-disable react/prop-types */
import React from "react";

import styles from "./CommentForm.module.css";
import { Comment } from "../../../models/Comment";

interface CommentFormProps {
  onAddNewComment: (comment: Comment) => void;
}

export function CommentForm({ onAddNewComment }: CommentFormProps) {
  const [newCommentText, setNewCommentText] = React.useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onAddNewComment({
      id: crypto.randomUUID(),
      content: newCommentText,
    });

    // event.target.reset(); // This line is commented out because it is not working
    setNewCommentText("");
  }

  function handleNewCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setNewCommentText(event.target.value);
    event.target.setCustomValidity("");
  }

  function handleNewCommentInvalid(
    event: React.InvalidEvent<HTMLTextAreaElement>
  ) {
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
