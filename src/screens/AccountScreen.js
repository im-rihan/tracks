import React, { useContext } from 'react';
import { StyleSheet, Text, Button, SafeAreaView, Platform, StatusBar } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
	const { signOut } = useContext(AuthContext);

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<Text style={{ fontSize: 48, marginLeft: 15 }}>AccountScreen</Text>
			<Spacer>
				<Button title='Sign Out' onPress={() => signOut()} />
			</Spacer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1, backgroundColor: "white",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	}
});

export default AccountScreen;
