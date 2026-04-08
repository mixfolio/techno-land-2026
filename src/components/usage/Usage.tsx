import styles from "./Usage.module.css";
import { usage } from "../../constants";

export const Usage = () => {
  return (
    <section className="section bg-dark">
      <div className="container">
        <h2 className="h2 text-on-action">{usage.title}</h2>
        <div className={styles.content}>
          {usage.list.map((item) => (
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
