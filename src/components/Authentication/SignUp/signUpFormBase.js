import React, { Component } from 'react';

class SignUpFormBase extends Component {
	state = {
		email: '',
		password: '',
		name: '',
		age: '',
		role: '',
		school: '',
		jobTitle: '',
		error: null,
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		this.props.firebase
			.doCreateUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				this.setState({ ...this.state });
			})
			.catch((error) => this.setState({ error }));
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const {
			email,
			password,
			name,
			age,
			role,
			school,
			jobTitle,
			error,
		} = this.state;
		const isValid =
			email === '' ||
			password === '' ||
			name === '' ||
			age === '' ||
			role === '';

		return (
			<form onSubmit={this.handleSubmit}>
				<h1>Sign Up</h1>
				<section>
					<h2>Basic Information</h2>
					<div>
						<label>
							Email
							<input
								name='email'
								type='email'
								value={email}
								onChange={this.handleChange}
							/>
						</label>
					</div>
					<div>
						<label>
							Password
							<input
								name='password'
								type='password'
								value={password}
								onChange={this.handleChange}
							/>
						</label>
					</div>
					<div>
						<label>
							Full name
							<input
								name='name'
								type='text'
								value={name}
								onChange={this.handleChange}
							/>
						</label>
					</div>
					<div>
						<label>
							Age
							<input
								name='age'
								type='number'
								value={age}
								onChange={this.handleChange}
							/>
						</label>
					</div>
				</section>
				<section>
					<h2>Choose Role</h2>
					<fieldset>
						<legend>Role</legend>
						<label>
							<input
								name='role'
								type='radio'
								value='mentee'
								onChange={this.handleChange}
							/>
							Mentee
						</label>
						<label>
							<input
								name='role'
								type='radio'
								value='mentor'
								onChange={this.handleChange}
							/>
							Mentor
						</label>
					</fieldset>
				</section>
				<section>
					{this.state.role === 'mentee' ? (
						<label>
							School
							<input
								name='school'
								type='text'
								value={school}
								onChange={this.handleChange}
							/>
						</label>
					) : (
						<label>
							Job Title
							<input
								name='jobTitle'
								type='text'
								value={jobTitle}
								onChange={this.handleChange}
							/>
						</label>
					)}
				</section>
				<div>
					<input type='submit' disabled={isValid} value='Create' />
				</div>
			</form>
		);
	}
}

export default SignUpFormBase;
