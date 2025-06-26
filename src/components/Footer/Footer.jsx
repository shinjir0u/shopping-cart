import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
          <p className={styles.footer__text}>Developed by Shinji</p>
      </div>
    </div>
  );
}

export default Footer;
