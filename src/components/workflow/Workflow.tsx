import styles from "./Workflow.module.css";
import { workflow } from "../../constants";
// import ArrowTip from "./icons/arrow-tip.svg?react";
import Arrow from "./icons/arrow.svg?react";

export const Workflow = () => {
  return (
    <section className="section bg-dark">
      <div className="container">
        <h2 className="h2 text-on-action">{workflow.title}</h2>
        <div className={styles.content}>
          <div className={styles.card}>
            {workflow.list[0].icon}
            <p className={styles.text}>{workflow.list[0].text}</p>
            <div className={styles.info}>
              <h6>{workflow.list[0].info.title}</h6>
              <p>{workflow.list[0].info.desc}</p>
            </div>
          </div>
          <Arrow className={styles.arrow} />
          <div className={styles.card}>
            {workflow.list[1].icon}
            <p className={styles.text}>{workflow.list[1].text}</p>
            <div className={styles.info}>
              <h6>{workflow.list[1].info.title}</h6>
              <p>{workflow.list[1].info.desc}</p>
            </div>
          </div>
          <Arrow className={styles.arrow} />
          <div className={styles.card}>
            {workflow.list[2].icon}
            <p className={styles.text}>{workflow.list[2].text}</p>
            <div className={styles.info}>
              <h6>{workflow.list[2].info.title}</h6>
              <p>{workflow.list[2].info.desc}</p>
            </div>
          </div>
          <Arrow className={styles.arrow} />
          <div className={styles.card}>
            {workflow.list[3].icon}
            <p className={styles.text}>{workflow.list[3].text}</p>
            <div className={styles.info}>
              <h6>{workflow.list[3].info.title}</h6>
              <p>{workflow.list[3].info.desc}</p>
            </div>
          </div>
          <Arrow className={styles.arrow} />
          <div className={styles.card}>
            {workflow.list[4].icon}
            <p className={styles.text}>{workflow.list[4].text}</p>
            <div className={styles.info}>
              <h6>{workflow.list[4].info.title}</h6>
              <p>{workflow.list[4].info.desc}</p>
            </div>
          </div>
          <Arrow className={styles.arrow} />
          <div className={styles.card}>
            {workflow.list[5].icon}
            <p className={styles.text}>{workflow.list[5].text}</p>
            <div className={styles.info}>
              <h6>{workflow.list[5].info.title}</h6>
              <p>{workflow.list[5].info.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
