import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
	switch (action.type) {
		case 'add_current_location':
			return { ...state, currentLocation: action.payload };
		default:
			return state;
	}
};

const changeName = (dispatch) => { };

const startRecording = (dispatch) => { };

const stopRecording = dispatch => { };

const addLocation = (dispatch) => (location, recording) => {
	dispatch({ type: 'add_current_location', payload: location });
	if (recording) {
		dispatch({ type: 'add_location', payload: location });
	}
};

const reset = (dispatch) => { };

export const { Context, Provider } = createDataContext(
	locationReducer,
	{ startRecording, stopRecording, addLocation, changeName, reset },
	{ name: '', recording: false, locations: [], currentLocation: null }
);

