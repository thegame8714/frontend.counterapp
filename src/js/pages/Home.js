import React from "react";
import { Link } from "react-router";

class Home extends React.Component {
	render() {
		const practices = this.props.route.data;
		const practiceNode = practices.map((practice) => {
			return (
				<li key={practice.id} className="table-view-cell media">
					<Link to={"/practice/" + practice.id} className="navigate-right">
						<img className="media-object pull-left" src={practice.img} />
						<div className="media-body">
							{practice.name}
							<p>{practice.desc}</p>
						</div>
					</Link>
				</li >
			)
		});

		return (
			<div className="content">
				<ul className="table-view">
					<li className="table-view-cell table-view-divider">Your activities</li>
					{practiceNode}
				</ul>
			</div>
		);
	}
}

export default Home;


