import instance from "../api/tracker";
import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signup':
			return { errorMessage: '', token: action.payload };
		case 'signin':
			return { errorMessage: '', token: action.payload };
		case "clear_error_message":
			return { ...state, errorMessage: '' };
		case 'signout':
			return { token: null, errorMessage: '' };
		default:
			return state;
	};
};

const clearErrorMessage = (dispatch) => () => {
	dispatch({ type: "clear_error_message" });
};

const tryLocalSignIn = (dispatch) => async () => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: "signin", payload: token });
		navigate("TrackList");
	} else {
		navigate("Signup");
	};
};

const signUp = (dispatch) => async ({ email, password }) => {
	try {
		const response = await instance.post("/signup", { email, password });
		await AsyncStorage.setItem('token', response.data.token);

		dispatch({ type: 'signup', payload: response.data.token });

		navigate('TrackList');
	} catch (error) {
		dispatch({ type: 'add_error', payload: 'Something went wrong' });
	}
};

const signIn = (dispatch) => async ({ email, password }) => {
	try {
		const response = await instance.post("/signin", { email, password });
		await AsyncStorage.setItem('token', response.data.token);

		dispatch({ type: 'signin', payload: response.data.token });

		navigate('TrackList');
	} catch (error) {
		dispatch({ type: 'add_error', payload: 'Something went wrong' });
	}
};

const signOut = (dispatch) => {
	return async () => {
		await AsyncStorage.removeItem('token');
		dispatch({ type: 'signout' });
		navigate('loginFlow');
	};
};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signUp, signIn, signOut, clearErrorMessage, tryLocalSignIn },
	{ isSignedIn: false, errorMessage: '' }
)