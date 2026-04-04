import styles from "./Contacts.module.css";
import { ListItem } from "../list-item/ListItem";

export const Contacts = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.content}>
          <ListItem text="email: a.korzun@s-tech.tech" />
          <ListItem text="Генеральный Директор: Корзун Алексей Владимирович" />
        </div>
      </div>
    </section>
  );
};
