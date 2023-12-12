import React from "react";

// react icons
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <div className="container container-container">
        <Link className="nav-logo" to={"/"}>
          <h3>
            Fire <span>Stack</span>
          </h3>
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to={"/profile"}>Beg Jokes</Link>
          </li>
          <li>
            <Link to={"/create"}>Create Posts</Link>
          </li>
          <li>
            <Link to={"/authors"}>Authors</Link>
          </li>
          <li>
            <Link to={"/logout"}>Logout</Link>
          </li>
        </ul>

        <button className="nav-toggle-button btn btn-primary">
          <FaBars />
          <MdOutlineClose />
        </button>
      </div>
    </nav>
  );
}
