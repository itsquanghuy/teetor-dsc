import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import MyPendingMentee from '../Profile/myPendingMentee';
import EvaluationForm from './evaluationForm';
import { withFirebase } from '../../Firebase';

class Evaluation extends Component {
	state = {
		myMentor: null,
		myMentee: null,
	};

	chart = () => (
		<div className={this.props.user.role === 'mentor' ? 'col' : ''}>
			{this.props.user.role === 'mentor' ? (
				<h2 className='text-center m-5'>History</h2>
			) : (
				<h1 className='text-center m-5'>History</h1>
			)}
			{this.props.user.connection.evals.map((evaluation) => (
				<div className='mt-5' key={evaluation.date}>
					<h3 className='text-center'>
						{new Date(evaluation.date).toString()}
					</h3>
					<HorizontalBar
						data={{
							labels: ['positivity', 'applicability', 'acquirability'],
							datasets: [
								{
									label: 'Evaluation on each skill',
									backgroundColor: 'steelblue',
									data: [
										evaluation.positivity,
										evaluation.applicability,
										evaluation.acquirability,
									],
								},
							],
						}}
					/>
					<p className='p-3'>
						<span className='font-italic'>Note: </span>
						{evaluation.comment}
					</p>
				</div>
			))}
		</div>
	);

	renderMentor = () => {
		if (this.props.user.pendingConnection) {
			return (
				<div className='text-center mt-5'>
					<h1 className='mb-3'>My Pending Mentee</h1>
					<MyPendingMentee
						user={this.props.user}
						onAcceptConnectionFrom={this.props.onAcceptConnectionFrom}
						onDeclineConnectionFrom={this.props.onDeclineConnectionFrom}
					/>
				</div>
			);
		}

		if (!this.props.user.connection) {
			return (
				<h1 className='text-center'>You have not connected to a mentee yet</h1>
			);
		}

		return (
			<div className='row'>
				<div className='col p-5'>
					<h1>Evaluation</h1>
					<EvaluationForm onEvaluate={this.props.onEvaluate} />
				</div>
				{this.chart()}
			</div>
		);
	};

	renderMentee = () => {
		if (!this.props.user.connection) {
			return (
				<div className='text-center m-2'>
					<h1 className='m-3'>You have not connected to any mentor yet</h1>
					<Link to='search'>
						<button className='btn btn-outline-primary'>Find a mentor</button>
					</Link>
				</div>
			);
		}

		return this.chart();
	};

	render() {
		return (
			<div>
				{this.props.user.role === 'mentor'
					? this.renderMentor()
					: this.renderMentee()}
			</div>
		);
	}
}

export default withFirebase(Evaluation);
