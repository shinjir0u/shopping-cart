import { Link } from "react-router-dom";
import style from "./menu.module.css";
import Icon from "@mdi/react";
import { mdiCart } from "@mdi/js";

function Menu({ cartItemsCount = 0 }) {
  return (
    <div className={style.menu}>
      <div className={`${style.menu__content} container`}>
        <img
          src="/src/assets/icons/logo.png"
          alt="logo"
          className={style.logo}
        />
        <nav className={style.nav}>
          <ul className={style.nav__list}>
            <li className={style.nav__list_item}>
              <Link className={style.nav__link} to={"/"}>
                Home
              </Link>
            </li>
            <li className={style.nav__list_item}>
              <Link className={style.nav__link} to={"games"}>
                Games
              </Link>
            </li>
          </ul>
        </nav>
        <div className={style.cart__container}>
          <Icon
            className={style.cart}
            path={mdiCart}
            color={"rgb(213, 206, 163)"}
          ></Icon>
          <span className={style.cart__items_counter}>{cartItemsCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
