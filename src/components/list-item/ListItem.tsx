import styles from "./ListItem.module.css";
import Marker from "./marker.svg?react";

export const ListItem = ({ text }: { text: string }) => {
  return (
    <div className={styles.root}>
      <Marker />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
