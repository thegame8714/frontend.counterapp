import React, { Component } from "react";
import PageHeading from '../components/PageHeading';

class Settings extends Component {
	render() {
		return (
			<div className="content">
				<div className="content-padded">
					<PageHeading object="this.props.route" path="pageTile" value="Settings page" />
					<h2>Synchronise progress</h2>
					<p>By providing your email address you can synchronisezed your progres betwen all devices.</p>
					<form>
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
						<button className="btn btn-positive btn-block">Synchronise</button>
						<p>Last synchronised on 01/06/2016 16:33</p>
					</form>
					<h2>Add new Practice</h2>
					<form>
						<input type="text" placeholder="Practice Name" />
						<input type="text" placeholder="Brief Description Name" />
						<button className="btn btn-positive btn-block">Add Practice</button>
					</form>
					<h2>Remove practice</h2>
					<p>Only practices added by user can be deleted. Main Four practices can't be.</p>
					<ul className="table-view">
						<li className="table-view-cell">Practice 5
							<button className="btn btn-negative">Delete</button>
						</li>
						<li className="table-view-cell">Practice 6
							<button className="btn btn-negative">Delete</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Settings;
