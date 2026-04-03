import styles from "./Workflow.module.css";
import { workflow } from "../../constants";

export const Workflow = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>{workflow.title}</h2>
        <div className={styles.content}>
          {workflow.list.map((item) => (
            <div key={item.id} className={styles.card}>
              {item.icon}
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
