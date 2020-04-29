import React from 'react';
import { withFirebase } from '../../Firebase';
import SignUpFormBase from './signUpFormBase';

const SignUpForm = withFirebase(SignUpFormBase);

const SignUpPage = () => {
	return (
		<div>
			<SignUpForm />
		</div>
	);
};

export default SignUpPage;
