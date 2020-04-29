import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MyMentor extends Component {
	render() {
		if (!this.props.myMentor) {
			return (
				<div>
					<h1>My Mentor</h1>
				</div>
			);
		}

		return (
			<div>
				<h1>My Mentor</h1>
				<h2>{this.props.myMentor.name}</h2>
				<p>
					{this.props.myMentor.age} - {this.props.myMentor.jobTitle}
				</p>
				<div>
					<button
						className='btn btn-outline-primary mr-2'
						onClick={() => this.props.onDisconnectTo(this.props.myMentor)}
					>
						Disconnect
					</button>
					<Link to='/evaluation'>
						<span className='btn btn-primary'>See Evaluation</span>
					</Link>
				</div>
			</div>
		);
	}
}

export default MyMentor;
