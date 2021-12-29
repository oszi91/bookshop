import { createSlice } from '@reduxjs/toolkit';
import userInfo from './../../models/UserInfo.model';

interface userInfoWithInput extends userInfo {
	[key: string]: string;
}

interface SliceState {
	userInfo: userInfoWithInput;
	errors: userInfo;
	success: boolean;
}

const initialState: SliceState = {
	userInfo: {
		name: '',
		surname: '',
		city: '',
		postCode: '',
	},
	errors: {
		name: '',
		surname: '',
		city: '',
		postCode: '',
	},
	success: false,
};

const checkoutSlice = createSlice({
	name: 'checkout',
	initialState,
	reducers: {
		checkoutHandle(state, action) {
			state.userInfo[action.payload.fieldName] = action.payload.userData;
		},
		checkoutErrors(state, action) {
			state.errors = action.payload;
		},
		checkoutSuccess(state, action) {
			state.success = action.payload;
		},
		reset() {
			return initialState;
		},
	},
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice.reducer;
