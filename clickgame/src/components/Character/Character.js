import React from "react";
import "./Character.css";

const Character = props => {
	return (
		<div className="character">
			<div className="img-container">
				<img alt={props.name} src={props.image} />
			</div>
		</div>
	);
};

export default Character;

