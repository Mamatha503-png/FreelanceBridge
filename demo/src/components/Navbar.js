import React, { useState } from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import { Button } from "rsuite/";
// import { Button } from './Button';
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button,setButton]=useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  let url = "http://127.0.0.1:5000/";

  // const renderMenu = ({ left, top, className }, ref) => {
  //   return (
  //     <Popover ref={ref} className={className} style={{ left, top }} full>
  //       <Dropdown.Menu>
  //         <Dropdown.Item
  //           eventKey={1}
  //           className="droptext"
  //           onClick={navigateToLogin}
  //         >
  //           Login
  //         </Dropdown.Item>
  //         <Dropdown.Item
  //           eventKey={2}
  //           className="droptext"
  //           onClick={navigateToRegister}
  //         >
  //           Register
  //         </Dropdown.Item>
  //       </Dropdown.Menu>
  //     </Popover>
  //   );
  // };

  // const navigate = useNavigate();

  // const navigateToLogin = () => {
  //   navigate("/login");
  //   closeMobileMenu();
  // };

  // const navigateToRegister = () => {
  //   navigate("/sign-in");
  //   closeMobileMenu();
  // };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            ExpertSolutions <i class="bi bi-mortarboard"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/* Toggle icon */}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                AboutUs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a href={url} className="nav-links" onClick={closeMobileMenu}>
                Help
              </a>
            </li>
            <li className="nav-item">
              <Link to="/sign-in" className="nav-but" onClick={closeMobileMenu}>
                <Button
                  appearance="primary"
                  color="green"
                  className="nav-button"
                >
                  SIGN UP
                </Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-but" onClick={closeMobileMenu}>
                <Button
                  appearance="primary"
                  color="green"
                  className="nav-button"
                >
                  SIGN IN
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


