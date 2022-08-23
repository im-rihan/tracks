import '../_mockLocation';
import React, { useContext } from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = ({ isFocused }) => {
	const { state, addLocation } = useContext(LocationContext);
	const [err] = useLocation(isFocused, location => {
		addLocation(location, state.recording);
	});

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<Text h2>Create a Track</Text>
			<Map />
			{err ? <Text>Please enable location services</Text> : null}
			<TrackForm />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1, backgroundColor: "white",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	}
});

export default withNavigationFocus(TrackCreateScreen);
