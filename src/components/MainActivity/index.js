import React, { Component } from 'react';
import Navigation from './Navigation';
import { withFirebase } from '../Firebase';

class MainActivityPage extends Component {
	state = {
		user: null,
	};

	getUserData = async () => {
		const data = await this.props.firebase.user(this.props.user.email);
		this.setState({ user: data });
	};

	componentDidMount() {
		this.getUserData();
	}

	handleConnectTo = (mentor) => {
		const { user } = this.state;
		user.pendingConnection = mentor.email;
		mentor.pendingConnection = user.email;

		this.setState({ user });
		this.props.firebase.save(user);
		this.props.firebase.save(mentor);
	};

	handleDisconnectTo = (mentor) => {
		const { user } = this.state;
		user.connection = null;
		mentor.connection = null;

		this.setState({ user });
		this.props.firebase.save(user);
		this.props.firebase.save(mentor);
	};

	handleCancelTo = (mentor) => {
		const { user } = this.state;
		user.pendingConnection = null;
		mentor.pendingConnection = null;
		this.setState({ user });
		this.props.firebase.save(user);
		this.props.firebase.save(mentor);
	};

	handleSignout = () => this.props.firebase.doSignOut();

	handleAcceptConnectionFrom = (mentee) => {
		const { user } = this.state;

		user.connection = {
			mentee: mentee.email,
			evals: [],
		};
		user.pendingConnection = null;

		mentee.connection = {
			mentor: user.email,
			evals: [],
		};
		mentee.pendingConnection = null;

		this.setState({ user });
		this.props.firebase.save(user);
		this.props.firebase.save(mentee);
	};

	handleDeclineConnectionFrom = (mentee) => {
		const { user } = this.state;
		user.pendingConnection = null;
		mentee.pendingConnection = null;
		this.setState({ user });
		this.props.firebase.save(user);
		this.props.firebase.save(mentee);
	};

	handleEvaluate = (data) => {
		const { user } = this.state;
		user.connection.evals.push(data);
		this.setState({ user });
		this.props.firebase.user(user.connection.mentee + '').then((mentee) => {
			mentee.connection.evals.push(data);
			this.props.firebase.save(user);
			this.props.firebase.save(mentee);
		});
	};

	handleAddCertificate = (data) => {
		const { user } = this.state;
		user.certificates.push(data);
		this.setState({ user });
		this.props.firebase.save(user);
	};

	handleAddExperience = (data) => {
		const { user } = this.state;
		user.experiences.push(data);
		this.setState({ user });
		this.props.firebase.save(user);
	}

	render() {
		return (
			<div className='container'>
				<Navigation
					user={this.state.user}
					onConnectTo={this.handleConnectTo}
					onDisconnectTo={this.handleDisconnectTo}
					onCancelTo={this.handleCancelTo}
					onSignOut={this.handleSignout}
					onAcceptConnectionFrom={this.handleAcceptConnectionFrom}
					onDeclineConnectionFrom={this.handleDeclineConnectionFrom}
					onEvaluate={this.handleEvaluate}
					onAddCertificate={this.handleAddCertificate}
					onAddExperience={this.handleAddExperience}
				/>
			</div>
		);
	}
}

export default withFirebase(MainActivityPage);
