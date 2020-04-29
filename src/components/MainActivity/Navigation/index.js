import React, { Component } from 'react';
import * as ROUTES from '../constants/routes';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Evaluation from '../Evaluation';
import Profile from '../Profile';
import Search from '../Search';

class Navigation extends Component {
	render() {
		if (!this.props.user) {
			return (
				<div>
					<nav className='navbar navbar-dark bg-dark'>
						<div className='navbar-nav'>
							<span className='nav-item nav-link'>
								<i className='fa fa-line-chart'></i>
							</span>
							<span className='nav-item nav-link'>
								<i className='fa fa-user-circle'></i>
							</span>
							<span className='nav-item nav-link'>
								<i className='fa fa-search'></i>
							</span>
						</div>
						<button className='btn btn-outline-primary'>Sign out</button>
					</nav>
				</div>
			);
		}

		return (
			<Router>
				<div>
					<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
						<div className='navbar-nav'>
							<Link to='/'>
								<span className='nav-item nav-link'>
									<i className='fa fa-line-chart'></i>
								</span>
							</Link>
							<Link to='/profile'>
								<span className='nav-item nav-link'>
									<i className='fa fa-user-circle'></i>
								</span>
							</Link>
							{this.props.user.role === 'mentee' ? (
								<Link to='/search'>
									<span className='nav-item nav-link'>
										<i className='fa fa-search'></i>
									</span>
								</Link>
							) : null}
							<button
								className='btn btn-outline-primary'
								onClick={() => this.props.onSignOut()}
							>
								Sign out
							</button>
						</div>
					</nav>

					{/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
					<Switch>
						<Route path='/profile'>
							<Profile
								user={this.props.user}
								onDisconnectTo={this.props.onDisconnectTo}
								onAddCertificate={this.props.onAddCertificate}
								onAddExperience={this.props.onAddExperience}
							/>
						</Route>
						{this.props.user.role === 'mentee' ? (
							<Route path='/search'>
								<Search
									user={this.props.user}
									onConnectTo={this.props.onConnectTo}
									onDisconnectTo={this.props.onDisconnectTo}
									onCancelTo={this.props.onCancelTo}
								/>
							</Route>
						) : null}
						<Route path='/'>
							<Evaluation
								user={this.props.user}
								onAcceptConnectionFrom={this.props.onAcceptConnectionFrom}
								onDeclineConnectionFrom={this.props.onDeclineConnectionFrom}
								onEvaluate={this.props.onEvaluate}
							/>
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Navigation;
