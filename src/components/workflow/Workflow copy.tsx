import styles from "./Workflow.module.css";
import { workflow } from "../../constants";
// import ArrowTip from './icons/arrow-tip.svg?react'

export const Workflow = () => {
  return (
    <section className="section bg-dark">
      <div className="container">
        <h2 className="h2 text-on-action">{workflow.title}</h2>
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
