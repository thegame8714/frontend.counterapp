import React from "react";
import { Link } from 'react-router';

class Header extends React.Component{
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">


					<nav className="navbar navbar-inverse navbar-embossed" role="navigation">
						<div className="navbar-header">
							<Link className="navbar-brand" to="/">CounterApp</Link>
						</div>

						<ul className="nav navbar-nav navbar-right">
							<li><Link to="/about">About</Link></li>
							<li><Link to="/sync">Sync</Link></li>
						</ul>
					</nav>
				</div>
			</div>
		)
	}
}

export default Header;
