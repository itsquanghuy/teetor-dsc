import React, { Component } from 'react';
import { withFirebase } from '../../Firebase';
import { Accordion, Card, Button } from 'react-bootstrap';

class MyPendingMentee extends Component {
	state = {
		pendingMentee: null,
	};

	getPendingMenteeData = async () => {
		const data = await this.props.firebase.user(
			this.props.user.pendingConnection + ''
		);
		this.setState({ pendingMentee: data });
	};

	componentDidMount() {
		this.getPendingMenteeData();
	}

	render() {
		if (!this.state.pendingMentee) {
			return <div></div>;
		}

		return (
			<Accordion>
				<Card>
					<Card.Header>
						<div className='border-bottom border-bottom-light'>
							<h2>{this.state.pendingMentee.fullname}</h2>
							<p>
								{this.state.pendingMentee.age} -{' '}
								{this.state.pendingMentee.school}
							</p>
							<div>
								<button
									className='btn btn-outline-primary mr-2'
									onClick={() =>
										this.props.onDeclineConnectionFrom(this.state.pendingMentee)
									}
								>
									Decline
								</button>
								<button
									className='btn btn-primary'
									onClick={() =>
										this.props.onAcceptConnectionFrom(this.state.pendingMentee)
									}
								>
									Accept
								</button>
							</div>
							<Accordion.Toggle as={Button} variant='link' eventKey='0'>
								<button type='button' class='btn btn-light'>
									<i className='fa fa-sort-down'></i>
								</button>
							</Accordion.Toggle>
						</div>
						<Accordion.Collapse eventKey='0'>
							<Card.Body>
								<h3 className='mb-4'>Certificates</h3>
								{this.state.pendingMentee.certificates.map((cert) => (
									<div>
										<h4>{cert.name}</h4>
										<p>{cert.organization}</p>
										<p>{cert.url}</p>
									</div>
								))}
								<h3 className='mt-5 mb-4'>Experiences</h3>
								{this.state.pendingMentee.experiences.map((exp) => (
									<div>
										<h4>{exp.jobTitle}</h4>
										<p>{exp.company}</p>
										<p>{exp.description}</p>
									</div>
								))}
							</Card.Body>
						</Accordion.Collapse>
					</Card.Header>
				</Card>
			</Accordion>
		);
	}
}

export default withFirebase(MyPendingMentee);
