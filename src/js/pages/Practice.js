import React from "react";
import PracticeFooter from '../components/PracticeFooter';
//this.props.params.practiceId

class Practice extends React.Component {

	render() {

		const practices = this.props.route.data;

		const id = this.props.params.id;
		const practice = practices.filter(practice => {
			if (practice.id == id) {
				return practice;
			}
		});

		return (
			<div className="content">
				<PracticeFooter />
				<div className="content-padded">
					<h1>{practice[0].name}</h1>
					<img className="media-object pull-left" src={practice[0].img} />
					<div className="media-body">
						<p>Last time Practiced: {practice[0].updateDate}</p>
						<p>Scheduled completion: {practice[0].scheduleDate}</p>
						<p>Total repetition: {practice[0].repetitionTotal}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Practice;
