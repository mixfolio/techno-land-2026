import styles from "./OurTeam.module.css";
import Experience from "./icons/experience.svg?react";
import Cup from "./icons/cup.svg?react";
import Development from "./icons/development.svg?react";

export const OurTeam = () => {
  return (
    <section className="section bg-dark">
      <div className="container">
        <h2 className="h2 text-on-action">О команде</h2>
        <div className={styles.content}>
          <div className={styles.card}>
            <Experience />
            <p className={styles.text}>Более 20 лет опыта в IT</p>
          </div>
          <div className={styles.card}>
            <Cup />
            <p className={styles.text}>
              Участие и победы в отраслевых инициативах
            </p>
          </div>
          <div className={styles.card}>
            <Development />
            <p className={styles.text}>Разработка собственной платформы</p>
          </div>
        </div>
      </div>
    </section>
  );
};
