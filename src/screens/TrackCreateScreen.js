import '../_mockLocation';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Platform, StatusBar, SafeAreaView } from 'react-native';
import Map from '../components/Map';
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from '../hooks/useLocation';


const TrackCreateScreen = () => {
	const { addLocation } = useContext(LocationContext);
	const [err] = useLocation(addLocation);

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<Text style={{ fontSize: 30 }}>TrackCreateScreen</Text>
			<Map />
			{err && <Text>Please Enable Location Service</Text>}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1, backgroundColor: "white",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	}
});

export default TrackCreateScreen;
