import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  userName: string;
  hasBorder?: boolean;
}

export function Avatar({ src, userName, hasBorder = true }: AvatarProps) {
  return (
    <img
      src={src}
      alt={userName}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
