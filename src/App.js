import React, { Component } from 'react';
import './App.css';
import AuthenticationPage from './components/Authentication';
import MainActivityPage from './components/MainActivity';
import { AuthUserContext } from './components/Session';
import { withAuthentication } from './components/Session';

class App extends Component {
	render() {
		return (
			<AuthUserContext.Consumer>
				{(authUser) =>
					authUser === null ? (
						<AuthenticationPage />
					) : (
						<MainActivityPage user={authUser} />
					)
				}
			</AuthUserContext.Consumer>
		);
	}
}

export default withAuthentication(App);
