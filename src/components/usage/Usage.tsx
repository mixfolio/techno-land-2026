import styles from "./Usage.module.css";
import Experience from "./icons/experience.svg?react";
import Cup from "./icons/cup.svg?react";
import Development from "./icons/development.svg?react";
import { usage } from "../../constants";

export const Usage = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>{usage.title}</h2>
        <div className={styles.content}>
          <div className={styles.card}>
            <Experience />
            <p className={styles.text}>{usage.list[0].text}</p>
          </div>
          <div className={styles.card}>
            <Cup />
            <p className={styles.text}>{usage.list[1].text}</p>
          </div>
          <div className={styles.card}>
            <Development />
            <p className={styles.text}>{usage.list[2].text}</p>
          </div>
          <div className={styles.card}>
            <Experience />
            <p className={styles.text}>{usage.list[3].text}</p>
          </div>
          <div className={styles.card}>
            <Development />
            <p className={styles.text}>{usage.list[4].text}</p>
          </div>
          <div className={styles.card}>
            <Cup />
            <p className={styles.text}>{usage.list[5].text}</p>
          </div>
          <div className={styles.card}>
            <Development />
            <p className={styles.text}>{usage.list[6].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
