import React, { Component } from "react";
import Character from "./components/Character";
import CharContainer from "./components/CharContainer";
// import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";




const App = () => (
			<CharContainer>
				{characters.map(character => (
					<Character
						image={character.image}
						name={character.name}
					/>
				))}
			</CharContainer>

);
				
export default App;
