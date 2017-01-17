import React, { Component } from 'react'
import { Link } from 'react-router';

class PracticeFooter extends Component {
	constructor() {
		super();
		this.state = {
			practice: 'Start practice',
			schedule: 'Schedule',
			edit: 'Edit'
		}
	}
	render() {
		return (
			<div className="bar bar-tab">
				<Link className="tab-item" to="/start">
					<span className="icon icon-play"></span>
					<span className="tab-label">{this.state.practice}</span>
				</Link>
				<Link className="tab-item" to="/schedule">
					<span className="icon icon-compose"></span>
					<span className="tab-label">{this.state.schedule}</span>
				</Link>
				<Link className="tab-item" to="/edit">
					<span className="icon icon-edit"></span>
					<span className="tab-label">{this.state.edit}</span>
				</Link>
			</div>
		)
	}
}

export default PracticeFooter;
