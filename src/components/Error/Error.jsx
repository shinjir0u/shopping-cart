import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

function Error() {
  return (
    <>
      <Menu />
      <div className="container">
        <p>No such page exists.</p>
        <p>Click the following link to go back to home.</p>
        <Link to={"/"}>Home</Link>
      </div>
      <Footer />
    </>
  );
}

export default Error;
