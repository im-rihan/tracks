import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = () => {
	const { state, signIn, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				headerText="Sign In To Your Account"
				errorMessage={state.errorMessage}
				submitButtonText="Sign In"
				onSubmit={signIn}
			/>

			<NavLink
				routeName="Signup"
				text="Don't have an account? Go back to Sign Up!"
			/>
		</View>
	);
};

SigninScreen.navigationOptions = () => {
	return {
		header: () => false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 250,
	},
});

export default SigninScreen;
