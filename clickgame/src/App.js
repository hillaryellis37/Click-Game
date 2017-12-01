import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CharContainer from "./components/CharContainer";
import Character from "./components/Character";

import characters from "./characters.json";

let alreadyClicked = [];

class App extends Component {

	state = {
		score: 0,
		topscore: 0,
		message: "Click an image to begin!"
	};

	handleIncrementTopscore = () => {
		if (this.state.score >= this.state.topscore) {
			this.setState({topscore: this.state.topscore + 1});
		}
	};

	handleIncrementScore = id => {
		
		if (alreadyClicked.includes(id)) {
			this.setState({score: 0});
			this.setState({message: "You guessed incorrectly!"});
			alreadyClicked = [];
		} else {
			this.setState({score: this.state.score + 1});	
			this.setState({message: "You guessed correctly!"});	
			this.handleIncrementTopscore();
			alreadyClicked.push(id);
		}
	};

	render () {
		return (
				<div>	
					<Navbar
						score={this.state.score}
						topscore={this.state.topscore}
						message={this.state.message}
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
