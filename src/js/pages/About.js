import React, { Component } from "react";
import _ from 'lodash';

class About extends Component {
	constructor(props) {
		super()
	}

	/**
	 * @returns
	 * 
	 * @memberOf About
	 * use lodash to assign fallback value in case issues with react router
	 *
	 */
	render() {
		return (
			<div className='content'>
				<h1>{_.get(this.props.route, 'pageTitle', 'About page')}</h1>
			</div>
		);
	}
}

export default About;
