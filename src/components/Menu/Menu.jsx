import { Link, useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";
import Icon from "@mdi/react";
import { mdiCart } from "@mdi/js";

function Menu({ cartItemsCount = 0 }) {
  const navigate = useNavigate();

  return (
    <div className={styles.menu}>
      <div className={`${styles.menu__content} container`}>
        <div className={styles.app__logo_text}>
          <img
            src="/assets/icons/logo.png"
            alt="logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>Chilling Gamers</h1>
        </div>
        <div className={styles.links}>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__list_item}>
                <Link className={styles.nav__link} to={"/"}>
                  Home
                </Link>
              </li>
              <li className={styles.nav__list_item}>
                <Link className={styles.nav__link} to={"games"}>
                  Games
                </Link>
              </li>
            </ul>
          </nav>
          <div
            onClick={() => navigate("cart")}
            className={styles.cart__container}
          >
            <Icon
              className={styles.cart}
              path={mdiCart}
              color={"rgb(213, 206, 163)"}
            ></Icon>
            <span className={styles.cart__items_counter}>{cartItemsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
