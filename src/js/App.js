import React from "react";
import { Link } from 'react-router';
import Header from './components/Header';

class App extends React.Component{
	render() {
		return (
			<div className="container-flui">
				<Header />
				{this.props.children}
			</div>
		)
	}
}

export default App;
