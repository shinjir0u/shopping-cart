import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import Icon from "@mdi/react";
import { mdiCart } from "@mdi/js";

function Menu({ cartItemsCount = 0 }) {
  return (
    <div className={styles.menu}>
      <div className={`${styles.menu__content} container`}>
        <img
          src="/src/assets/icons/logo.png"
          alt="logo"
          className={styles.logo}
        />
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
        <div className={styles.cart__container}>
          <Icon
            className={styles.cart}
            path={mdiCart}
            color={"rgb(213, 206, 163)"}
          ></Icon>
          <span className={styles.cart__items_counter}>{cartItemsCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
