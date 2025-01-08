/* eslint-disable react/prop-types */
import styles from "./Avatar.module.css";

export function Avatar({ src, userName, hasBorder = true }) {
  return (
    <img
      src={src}
      alt={userName}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
