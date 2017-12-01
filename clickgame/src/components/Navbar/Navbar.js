import React from "react";
import Scores from "../Scores";
import "./Navbar.css";

const Navbar = () => (
	<nav className="navbar sticky-top navbar-light bg-light">
	  <ul>
	  	<li>Clicky Game</li>
	  	<li>Click an image to begin!</li>
	  	<li><Scores /></li>
	  </ul>
	</nav>
);

export default Navbar;