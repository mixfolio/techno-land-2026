import styles from "./Future.module.css";
import { future } from "../../constants";

export const Future = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>{future.title}</h2>
        <div className={styles.content}>
          {future.list.map((item) => (
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
