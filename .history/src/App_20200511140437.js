import React, { Component } from 'react';
import { CatComponent } from "./CatComponent";
import { Component } from "./GraceHopperQuoteComponentt";
import { Component } from "./MouseComponent";

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
