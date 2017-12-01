import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CharContainer from "./components/CharContainer";
import Character from "./components/Character";

import characters from "./characters.json";

class App extends Component {

	state = {
		score: 0,
		topscore: 0
	};

	handleIncrementTopscore = () => {
		if (this.state.score >= this.state.topscore) {
			this.setState({topscore: this.state.topscore + 1});
		}
	};

	handleIncrementScore = () => {
		this.setState({score: this.state.score + 1});
		this.handleIncrementTopscore();
	};

	render () {
		return (
				<div>	
					<Navbar
						score={this.state.score}
						topscore={this.state.topscore}
					/>	
					<Header />
					<CharContainer>
						{characters.map(character => (
							<Character								
								handleIncrementScore={this.handleIncrementScore}
								handleIncrementTopscore={this.handleIncrementTopscore}
								id={character.id}
								image={character.image}
								name={character.name}
							/>
						))}
					</CharContainer>
				</div>
		);
	}
}

export default App;
