import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { book } from '../../models/Book.model';

interface fetchData {
	data: book[];
	metadata: {
		records_per_page: number;
		total_records: number;
	};
}

interface SliceState {
	booklist: book[];
	metadata: {
		records_per_page: number;
		total_records: number;
	};
	loading: boolean;
}

const initialState: SliceState = {
	booklist: [],
	metadata: {
		records_per_page: 0,
		total_records: 0,
	},
	loading: false,
};

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		fetchData(state, action: PayloadAction<fetchData>) {
			const { data, metadata } = action.payload;
			state.booklist = data;
			state.metadata = metadata;
			state.loading = false;
		},
		loadingData(state) {
			state.loading = true;
		},
	},
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
