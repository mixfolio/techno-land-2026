import styles from "./Footer.module.css";
import MainLogo from "./images/main-logo-24.svg?react";
export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <MainLogo />
          <p className={styles.text}>– бренд компании ООО «НПО «Промтрейд»</p>
        </div>

        <hr />

        <div className="links">
          <p>© {new Date().getFullYear()} Технологии.</p>

          {/* <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul> */}
        </div>
      </div>
    </footer>
  );
};
