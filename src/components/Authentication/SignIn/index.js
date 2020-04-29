import React from 'react';
import SignInFormBase from './signInFormBase';
import { withFirebase } from '../../Firebase';

const SignInForm = withFirebase(SignInFormBase);

const SignInPage = (props) => {
	const { onAuthenticate } = props;

	return (
		<div>
			<SignInForm onAuthenticate={onAuthenticate} />
		</div>
	);
};

export default SignInPage;
