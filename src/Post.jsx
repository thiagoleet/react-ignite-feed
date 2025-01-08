export function Post(props) {
  return (
    <article>
      <header>
        <h2>{props.title}</h2>
        <sub>{props.author}</sub>
      </header>
      <p>{props.content}</p>
    </article>
  );
}
