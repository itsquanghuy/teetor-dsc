import React, { Component } from 'react';

class SignInFormBase extends Component {
	state = {
		email: '',
		password: '',
		error: null,
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		this.props.firebase
			.doSignInWithEmailAndPassword(email, password)
			.then(() => {
				console.log('sign in');
				this.setState({ ...this.state });
			})
			.catch((error) => this.setState({ error }));
	};

	render() {
		const { email, password, error } = this.state;
		const isValid = email === '' || password === '';

		return (
			<form
				onSubmit={this.handleSubmit}
				style={{ width: 250 }}
				className='mx-auto mt-5'
			>
				<h1 className='text-center'>Teetor</h1>
				<div className='mt-3'>
					<label>
						Email
						<input
							className='form-control'
							style={{ width: 250 }}
							name='email'
							type='email'
							value={email}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						Password
						<input
							className='form-control'
							style={{ width: 250 }}
							name='password'
							type='password'
							value={password}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div className='text-center'>
					<input
						className='btn btn-primary'
						type='submit'
						value='Sign In'
						disabled={isValid}
					/>
				</div>
			</form>
		);
	}
}

export default SignInFormBase;
