import styles from "./Tools.module.css";
import { tools } from "../../constants";

export const Tools = () => {
  return (
    <section className="section bg-dark">
      <div className="container">
        <h2 className="h2 text-on-action">Технологии и инструменты</h2>
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
