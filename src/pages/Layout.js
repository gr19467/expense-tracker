import { Outlet, Link } from "react-router-dom";
import '../images/home.png';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={require("../images/home.png")} alt=""></img>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <img src={require("../images/home.png")} alt=""></img>
            <Link to="/Budget">Budget</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;