import React from "react";
import PracticeFooter from '../components/PracticeFooter';

class Practice extends React.Component{
	render() {
		return (
			<div className="content">
				<PracticeFooter />
				<div className="content-padded">
					<h1>Practice Name</h1>
					<img className="media-object pull-left" src="http://placehold.it/108x108" />
					<div className="media-body">
						<p>Last time Practiced: 01/01/2016</p>
						<p>Scheduled completion 08/04/2017</p>
						<p>Total repetition: 83,413</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Practice;
