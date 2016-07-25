import React from 'react';

import NavBar from './NavBar.js'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="app-component">
				<NavBar />
			</div>)
	}
}