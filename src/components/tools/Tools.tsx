import styles from "./Tools.module.css";
import { tools } from "../../constants";

export const Tools = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>Технологии и инструменты</h2>
        <div className={styles.content}>
          {tools.map((card) => (
            <div key={card.href} className={styles.card}>
              <svg>
                <use href={`./sprite.svg#${card.href}`} />
              </svg>
              <p>{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
