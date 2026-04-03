import styles from "./Header.module.css";
import MainLogo from "../../assets/main-logo-24.svg?react";

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <MainLogo />
      </div>
    </div>
  );
};
