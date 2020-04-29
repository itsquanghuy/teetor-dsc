import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MyMentee extends Component {
	render() {
		if (!this.props.myMentee) {
			return (
				<div className='mt-5'>
					<h1>My Connected Mentee</h1>
				</div>
			);
		}

		return (
			
			<div className='mt-5'>
				<h1>My Connected Mentee</h1>
				<h2>{this.props.myMentee.fullname}</h2>
				<p>
					{this.props.myMentee.age} - {this.props.myMentee.school}
				</p>
				<Link to='/evaulation'>
					<span className='btn btn-primary'>Evaluate</span>
				</Link>
			</div>
		);
	}
}

export default MyMentee;
