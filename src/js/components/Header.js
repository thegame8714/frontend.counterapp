import React from "react";
import { Link } from 'react-router';

class Header extends React.Component {
	render() {
		return (
			<header className="bar bar-nav">
				<Link className="icon icon-left-nav pull-left" to="/"></Link>
				<Link className="icon icon-gear pull-right" to="/sync"></Link>
				<h1 className="title">
					<Link className="navbar-brand" to="/">CounterApp</Link>
				</h1>
			</header>
		)
	}
}

export default Header;
