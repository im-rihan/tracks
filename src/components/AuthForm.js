import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<Spacer>
				<Text style={styles.header} h3>{headerText}</Text>
			</Spacer>

			<Spacer>
				<Input
					label="Email"
					value={email}
					onChangeText={(email) => setEmail(email)}
					autoCapitalize="none"
					autoCorrect={false}
				/>
			</Spacer>

			<Spacer>
				<Input
					secureTextEntry
					label="Password"
					value={password}
					onChangeText={(password) => setPassword(password)}
					autoCapitalize="none"
					autoCorrect={false}
				/>
			</Spacer>

			{errorMessage ? (
				<Spacer>
					<Text style={styles.errorMessage}>{errorMessage}</Text>
				</Spacer>
			) : null}

			<Spacer>
				<Button
					title={submitButtonText}
					onPress={() => onSubmit({ email, password })}
				/>
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({
	header: {
		alignSelf: 'center',
		marginBottom:25
	},
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginLeft: 15,
		marginTop: 15
	}
});

export default AuthForm;
