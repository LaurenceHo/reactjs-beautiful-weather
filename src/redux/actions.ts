export const SET_ALL_WEATHER_DATA_INTO_STORE = 'SET_ALL_WEATHER_DATA_INTO_STORE';
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export function fetchingData() {
	return {
		type: FETCHING_DATA,
	}
}

export function fetchingDataSuccess() {
	return {
		type: FETCHING_DATA_SUCCESS,
	}
}

export function fetchingDataFailure() {
	return {
		type: FETCHING_DATA_FAILURE,
	}
}


export function setAllWeatherDataIntoStore(payload: any) {
	return {
		type: SET_ALL_WEATHER_DATA_INTO_STORE,
		payload
	}
}
