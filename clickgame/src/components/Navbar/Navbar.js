import React from "react";
import "./Navbar.css";

const Navbar = () => (
	<nav className="navbar sticky-top navbar-light bg-light">
	  <ul>
	  	<li>Clicky Game</li>
	  	<li>Click an image to begin!</li>
	  	<li>Score: 0 | Top Score: 0</li>
	  </ul>
	</nav>
);

export default Navbar;