import React, { Component } from 'react';

class EvaluationForm extends Component {
	state = {
		positivity: 0,
		applicability: 0,
		acquirability: 0,
		comment: '',
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			date: Date.now(),
			positivity: this.state.positivity,
			applicability: this.state.applicability,
			acquirability: this.state.acquirability,
			comment: this.state.comment,
		};
		this.props.onEvaluate(data);

		const reset = {
			positivity: 0,
			applicability: 0,
			acquirability: 0,
			comment: '',
		};
		this.setState({ ...reset });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className='form-group'>
					<label>
						Positivity
						<input
							style={{ width: 500 }}
							className='form-control-range'
							name='positivity'
							type='range'
							min='1'
							max='100'
							value={this.state.positivity}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						Applicability
						<input
							style={{ width: 500 }}
							className='form-control-range'
							name='applicability'
							type='range'
							min='1'
							max='100'
							value={this.state.applicability}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						Acquirability
						<input
							style={{ width: 500 }}
							className='form-control-range'
							name='acquirability'
							type='range'
							min='1'
							max='100'
							value={this.state.acquirability}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						Comment
						<textarea
							style={{ width: 500, height: 200 }}
							className='form-control'
							name='comment'
							value={this.state.comment}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div className='text-right'>
					<input className='btn btn-primary' type='submit' value='Add' />
				</div>
			</form>
		);
	}
}

export default EvaluationForm;
