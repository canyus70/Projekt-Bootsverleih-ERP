import { Link } from "react-router-dom";

import boot from "../images/boot.png";
import home from "../images/home.png";
import kalender from "../images/kalender.png";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <Link>
        <img src={home} alt="home" />
      </Link>
      <Link>
        <img src={boot} alt="boot" />
      </Link>
      <Link>
        <img src={kalender} alt="kalender" />
      </Link>
    </nav>
  );
};

export default NavBar;
