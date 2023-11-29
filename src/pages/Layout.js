import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src="../images/home.png" alt=""></img>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <img src="../images/home.png" alt=""></img>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;