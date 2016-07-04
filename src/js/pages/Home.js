import React from "react";
import { Link } from "react-router"
class Home extends React.Component{
	render() {
		return (
			<div className="content">
				<ul className="table-view">
					<li className="table-view-cell table-view-divider">Your activities</li>
					<li className="table-view-cell media">
						<Link to="/practice" className="navigate-right">
							<img className="media-object pull-left" src="http://placehold.it/64x64" alt="Placeholder image for Practice's 1 poster" />
							<div className="media-body">
								Practice 1
								<p>Lorem ipsum dolor sit amet, consectetur.</p>
							</div>
						</Link>
					</li>
					<li className="table-view-cell media">
						<Link to="/practice" className="navigate-right">
							<img className="media-object pull-left" src="http://placehold.it/64x64" alt="Placeholder image for Practice's 2 poster" />
							<div className="media-body">
								Practice 2
								<p>Lorem ipsum dolor sit amet, consectetur.</p>
							</div>
						</Link>
					</li>
					<li className="table-view-cell media">
						<Link to="/practice" className="navigate-right">
							<img className="media-object pull-left" src="http://placehold.it/64x64" alt="Placeholder image for Practice's 1 poster" />
							<div className="media-body">
								Practice 3
								<p>Lorem ipsum dolor sit amet, consectetur.</p>
							</div>
						</Link>
					</li>
					<li className="table-view-cell media">
						<Link to="/practice" className="navigate-right">
							<img className="media-object pull-left" src="http://placehold.it/64x64" alt="Placeholder image for Practice's 4 poster" />
							<div className="media-body">
								Practice 4
								<p>Lorem ipsum dolor sit amet, consectetur.</p>
							</div>
						</Link>
					</li>
					<li className="table-view-cell media">
						<Link to="/practice" className="navigate-right">
							<img className="media-object pull-left" src="http://placehold.it/64x64" alt="Placeholder image for Practice's 5 poster" />
							<div className="media-body">
								Practice 5
								<p>Lorem ipsum dolor sit amet, consectetur.</p>
							</div>
						</Link>
					</li>
					<li className="table-view-cell media">
						<Link to="/practice" className="navigate-right">
							<img className="media-object pull-left" src="http://placehold.it/64x64" alt="Placeholder image for Practice's 6 poster" />
							<div className="media-body">
								Practice 6
								<p>Lorem ipsum dolor sit amet, consectetur.</p>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Home;
