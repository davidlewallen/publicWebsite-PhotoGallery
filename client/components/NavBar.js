import React from 'react';

import NavBar from 'react-bootstrap/lib/NavBar';
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

export default class NavigationBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="navbar-component">
				<NavBar inverse>
					<NavBar.Header>
						<NavBar.Brand>
							<a href="#">Photo Gallery</a>
						</NavBar.Brand>
						<NavBar.Toggle />
					</NavBar.Header>
					<NavBar.Collapse>
						<Nav>
							<NavItem eventKey={1} href="#">Home</NavItem>
						</Nav>
					</NavBar.Collapse>
				</NavBar>
			</div>
		)
	}
}