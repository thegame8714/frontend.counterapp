import React, { Component } from "react";

class About extends Component {
	constructor(props) {
		super()
	}
	render() {
		return (

			<div className='content'>
				<h1>{this.props.route.pageTitle}</h1>
			</div>

		);
	}
}

export default About;
