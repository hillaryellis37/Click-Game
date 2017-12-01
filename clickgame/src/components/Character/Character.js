import React from "react";
import Scores from "../Scores";
import "./Character.css";

const Character = props => {
	return (
		<div className="character">
			<div onClick={() => props.handleIncrementScore()} key={props.id} className="img-container">
				<img alt={props.name} src={props.image} />
			</div>
		</div>
	);
};

export default Character;

