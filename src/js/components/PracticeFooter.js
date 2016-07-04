import React from "react";
import { Link } from 'react-router';

class PracticeFooter extends React.Component{
	render() {
		return (
				<div className="bar bar-tab">
					<Link className="tab-item"to="/start">
						<span className="icon icon-play"></span>
						<span className="tab-label">Start practice</span>
					</Link>
					<Link className="tab-item" to="/schedule">
						<span className="icon icon-compose"></span>
						<span className="tab-label">Schedule</span>
					</Link>
					<Link className="tab-item" to="/edit">
						<span className="icon icon-edit"></span>
						<span className="tab-label">Edit</span>
					</Link>
				</div>

		)
	}
}

export default PracticeFooter;
