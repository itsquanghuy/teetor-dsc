import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyCrjQ8iG_BB7CTbEfsHWQM8tS5p0tcNjyI',
	authDomain: 'teetor-dsc-2020.firebaseapp.com',
	databaseURL: 'https://teetor-dsc-2020.firebaseio.com',
	projectId: 'teetor-dsc-2020',
	storageBucket: 'teetor-dsc-2020.appspot.com',
	messagingSenderId: '657948619265',
	appId: '1:657948619265:web:6c89d3b26f265dd78c4600',
	measurementId: 'G-1QEEHRR4NT',
};

class Firebase {
	constructor() {
		firebase.initializeApp(config);

		this.auth = firebase.auth();
		this.db = firebase.firestore();
	}

	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();

	user = (email) =>
		this.db
			.collection('users')
			.doc(email)
			.get()
			.then((doc) => doc.data());

	mentors = (name, jobTitle) => {
		const toArray = (querySnapshot) => {
			const mentors = [];
			querySnapshot.forEach((doc) => mentors.push(doc.data()));
			return mentors;
		};

		if (name !== '' && jobTitle === '') {
			return this.db
				.collection('users')
				.where('role', '==', 'mentor')
				.where('name', '==', name)
				.get()
				.then(function (querySnapshot) {
					return toArray(querySnapshot);
				});
		} else if (name === '' && jobTitle !== '') {
			return this.db
				.collection('users')
				.where('role', '==', 'mentor')
				.where('jobTitle', '==', jobTitle)
				.get()
				.then(function (querySnapshot) {
					return toArray(querySnapshot);
				});
		} else {
			return this.db
				.collection('users')
				.where('role', '==', 'mentor')
				.where('name', '==', name)
				.where('jobTitle', '==', jobTitle)
				.get()
				.then(function (querySnapshot) {
					return toArray(querySnapshot);
				});
		}
	};

	save = (user) =>
		this.db.collection('users').doc(user.email).set(user, { merge: true });
}

export default Firebase;
