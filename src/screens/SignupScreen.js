import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = () => {
	const { state, signUp, clearErrorMessage, tryLocalSignIn } = useContext(AuthContext);

	useEffect(() => {
		tryLocalSignIn();
	}, []);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearErrorMessage} />

			<AuthForm
				headerText="Sign Up for Tracker"
				errorMessage={state.errorMessage}
				submitButtonText="Sign Up"
				onSubmit={signUp}
			/>

			<NavLink
				routeName="Signin"
				text="Already have an account? Sign in instead!"
			/>
		</View>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		header: () => false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 250,
	}
});

export default SignupScreen;
