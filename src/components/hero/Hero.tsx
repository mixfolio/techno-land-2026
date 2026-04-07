import { Button } from "../ui";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <video
          className="video"
          src="./videos/hud.m4v"
          loop
          muted
          autoPlay
          playsInline
        />
        <div className={styles.overlay} />

        <div className={styles.content}>
          <h1 className={styles.title}>
            Автоматизированная система диспетчеризации инженерной инфраструктуры
          </h1>
          <p className={styles.subtitle}>
            Создаем инновационные цифровые решения, открывающие новые
            возможности для роста бизнеса
          </p>
          <div>
            <Button>Скачать презентацию</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
