import "../../assets/styles/global.css";
import { chaossBadgingLogo } from "../../assets/images";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="navigation flex-row ">
        <div className="logo">
          <Link to="/">
            <img src={chaossBadgingLogo} alt="chaoss-logo" />
          </Link>
        </div>
        <ul className="flex-row ">
          <li>
            <Link to="/" className="nav-link">
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              {" "}
              About us
            </Link>
          </li>
          <li>
            <Link to="/event" className="nav-link">
              {" "}
              Event Badging
            </Link>
          </li>
        </ul>
        <button className="apply">
          <Link to="/apply">Apply for a Badge</Link>
        </button>
      </div>
    </>
  );
};

export default Header;
