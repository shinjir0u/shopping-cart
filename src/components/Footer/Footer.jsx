import style from "./footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <div className="container">
          <p className={style.footer__text}>Developed by Shinji</p>
      </div>
    </div>
  );
}

export default Footer;
