import React, { Component } from 'react';
import BasicInformation from './basicInfo';
import MyMentor from './myMentor';
import { withFirebase } from '../../Firebase';
import MyMentee from './myMentee';
import Certifications from './certifications';
import Experiences from './experiences';

class Profile extends Component {
	state = {
		myMentor: null,
		myMentee: null,
	};

	getMyMentorData = () => {
		this.props.firebase
			.user(this.props.user.connection.mentor + '')
			.then((data) => this.setState({ myMentor: data }));
	};

	getMyMenteeData = () => {
		this.props.firebase
			.user(this.props.user.connection.mentee + '')
			.then((data) => this.setState({ myMentee: data }));
	};

	componentDidMount() {
		if (!this.props.user.connection) {
			return;
		}

		if (this.props.user.role === 'mentee') {
			this.getMyMentorData();
		} else {
			this.getMyMenteeData();
		}
	}

	render() {
		const user = this.props.user;

		return (
			<div className='mx-auto row'>
				<div className='col mt-5'>
					<BasicInformation user={user} />
					<Certifications
						user={user}
						onAddCertificate={this.props.onAddCertificate}
					/>
					<Experiences
						user={user}
						onAddExperience={this.props.onAddExperience}
					/>
				</div>
				<div className='col mt-5'>
					{user.role === 'mentor' ? (
						<MyMentee myMentee={this.state.myMentee} />
					) : user.connection !== null ? (
						<MyMentor
							myMentor={this.state.myMentor}
							onDisconnectTo={this.props.onDisconnectTo}
						/>
					) : null}
				</div>
			</div>
		);
	}
}

export default withFirebase(Profile);
