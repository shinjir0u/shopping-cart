import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <img src="#" alt="logo" className="logo" />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <Link className="nav__link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__link" to={"games"}>
                Games
              </Link>
            </li>
          </ul>
        </nav>
        <div className="cart__container">Cart</div>
      </div>
    </div>
  );
}

export default Menu;
