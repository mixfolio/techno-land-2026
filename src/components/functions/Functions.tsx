import styles from "./Functions.module.css";
import { functions } from "../../constants";
import { ListItem } from "../list-item/ListItem";

export const Functions = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>{functions.title}</h2>
        <div className={styles.grid}>
          {functions.paragraphs.map((item) => (
            <div key={item.id} className={styles.content}>
              <h3 className={styles.subtitle}>{item.subtitle}</h3>
              {item.list.map((text) => (
                <ListItem key={text.id} text={text.text} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
