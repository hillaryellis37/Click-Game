import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CharContainer from "./components/CharContainer";
import Character from "./components/Character";

import characters from "./characters.json";





const App = () => (
		<div className="container-fluide">	
			<Navbar />	
			<Header />
			<CharContainer>
				{characters.map(character => (
					<Character
						image={character.image}
						name={character.name}
					/>
				))}
			</CharContainer>
		</div>
);

export default App;
