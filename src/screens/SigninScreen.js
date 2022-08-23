import React, { useContext } from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents, SafeAreaView } from 'react-navigation';

const SigninScreen = () => {
	const { state, signIn, clearErrorMessage } = useContext(AuthContext);

	return (
		<SafeAreaView style={styles.safeAreaView}>
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
		</SafeAreaView>
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
		// marginBottom: 250,
	},
	safeAreaView: {
		flex: 1, backgroundColor: "white",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		justifyContent: 'center',
	}
});

export default SigninScreen;
