import styles from "./Results.module.css";

export const Results = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Результаты внедрения</h2>
        <div className={styles.content}>
          <div className={styles.card}>
            <h4 className={styles.digit}>10%</h4>
            <p>снижение затрат на эксплуатацию, ремонт и обслуживание</p>
          </div>
          <div className={styles.card}>
            <h4 className={styles.digit}>30%</h4>
            <p>повышение производительности труда обслуживающего персонала</p>
          </div>
          <div className={styles.card}>
            <h4 className={styles.digit}>20%</h4>
            <p>снижение потребления ресурсов за счет оптимизации и прогноза</p>
          </div>
        </div>
      </div>
    </section>
  );
};
