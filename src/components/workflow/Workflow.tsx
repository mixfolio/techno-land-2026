import styles from "./Workflow.module.css";
import { workflow } from "../../constants";
import Arrow from "./icons/arrow.svg?react";

export const Workflow = () => {
  return (
    <section className="section bg-dark">
      <div className="container">
        <h2 className="h2 text-on-action">{workflow.title}</h2>
        <div className={styles.content}>
          {workflow.list.map((item) =>
            item.type === "card" ? (
              <div key={item.id} className={styles.card}>
                {item.icon}
                <p className={styles.text}>{item.text}</p>
                <div className={styles.info}>
                  <h6>{item.info?.title}</h6>
                  <p>{item.info?.desc}</p>
                </div>
              </div>
            ) : (
              <Arrow key={item.id} className={styles.arrow} />
            ),
          )}
        </div>
      </div>
    </section>
  );
};
