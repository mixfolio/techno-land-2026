import styles from "./Cases.module.css";
import boilerCase from "./images/case-1.jpg";
import electroCase from "./images/case-2.jpg";
import hud2 from "./hud2.mp4";
import hud3 from "./hud3.mp4";

export const Cases = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Кейсы</h2>
        <div className={styles.content}>
          <div className={styles.case}>
            <h3 className="h3">Диспетчерская служба на базе котельных</h3>
            <div className={styles.caseContent}>
              <div className={styles.videoContainer}>
                <video className={styles.video} controls poster={boilerCase}>
                  <source src={hud3} />
                </video>
              </div>
            </div>
          </div>

          <div className={styles.case}>
            <h3 className="h3">Система диспетчеризации электрических сетей</h3>
            <div className={styles.caseContent}>
              <div className={styles.videoContainer}>
                <video className={styles.video} controls poster={electroCase}>
                  <source src={hud2} />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
