import styles from "./Cases.module.css";
import boilerCase from "./images/case-1.jpg";
import electroCase from "./images/case-2.jpg";

export const Cases = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Кейсы</h2>
        <div className={styles.content}>
          {/* <video
            // src="https://disk.360.yandex.ru/client/disk?idApp=client&dialog=slider&idDialog=%2Fdisk%2Fboiler.mp4"
            width={640}
            height={"auto"}
            controls
            poster={boilerCase}
          >
            <source
              src="https://disk.360.yandex.ru/client/disk?idApp=client&dialog=slider&idDialog=%2Fdisk%2Fboiler.mp4"
              type="video/mp4"
            />
          </video> */}
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
