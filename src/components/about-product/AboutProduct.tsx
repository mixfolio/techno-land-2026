import styles from "./AboutProduct.module.css";
import { aboutProduct } from "../../constants";
import { ListItem } from "../list-item/ListItem";

export const AboutProduct = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>{aboutProduct.title}</h2>
        <div className={styles.content}>
          <h3 className={styles.subtitle}>{aboutProduct.subtitle}</h3>
          {aboutProduct.list.map((item) => (
            <ListItem key={item.id} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
};
