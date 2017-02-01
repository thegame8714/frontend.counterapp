import React, { Component } from "react";
import PageHeading from '../components/PageHeading';


class About extends Component {

	/**
	 * Creates an instance of About.
	 * 
	 * @param {any} props
	 * 
	 * @memberOf About
	 */
	constructor(props) {
		super()
	}


	/**
	 * 
	 * 
	 * @returns
	 * 
	 * @memberOf About
	 */
	render() {
		return (
			<div className='content'>
				<PageHeading value="About page" />
			</div>
		);
	}
}

export default About;
