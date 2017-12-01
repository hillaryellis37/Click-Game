import React from "react";

class Scores extends React.Component {

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
	          <p>Score: {this.state.score} | Top Score: {this.state.topscore}</p>
	          <button className="btn btn-primary" onClick={this.handleIncrementScore}>
	            Increment
	          </button>
      		</div>
		);
	}
}

export default Scores;

