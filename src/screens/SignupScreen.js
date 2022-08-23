import React, { useContext } from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents, SafeAreaView } from 'react-navigation';

const SignupScreen = () => {
	const { state, signUp, clearErrorMessage } = useContext(AuthContext);

	return (
		<SafeAreaView style={styles.safeAreaView}>
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
		</SafeAreaView>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		header: () => false,
	};
};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1, backgroundColor: "white",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		justifyContent: 'center',
	}
});

export default SignupScreen;
