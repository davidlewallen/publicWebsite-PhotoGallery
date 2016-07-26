import React from 'react';

import NavigationBar from './NavBar.js'
import Gallery from './Gallery.js'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="app-component">
				<NavigationBar />
				<Gallery />
			</div>)
	}
}