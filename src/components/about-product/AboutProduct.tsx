import styles from "./AboutProduct.module.css";
import { aboutProduct } from "../../constants";
import { ListItem } from "../list-item/ListItem";

export const AboutProduct = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">{aboutProduct.title}</h2>
        <div className={styles.content}>
          <h3 className="h3">{aboutProduct.subtitle}</h3>
          {aboutProduct.list.map((item) => (
            <ListItem key={item.id} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
};
