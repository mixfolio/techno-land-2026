import styles from "./Cases.module.css";
import boilerCase from "./images/case-1.jpg";
import electroCase from "./images/case-2.jpg";

export const Cases = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>Кейсы</h2>
        <div className={styles.content}>
          {/* <video src="./videos/boiler.mp4" controls /> */}
          <div className={styles.case}>
            <img src={boilerCase} alt="Кейс-1" />
            <div className={styles.text}>
              <p>Диспетчерская служба на базе котельных</p>
            </div>
          </div>
          <div className={styles.case}>
            <img src={electroCase} alt="Кейс-2" />
            <div className={styles.text}>
              <p>Система диспетчеризации электрических сетей</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
