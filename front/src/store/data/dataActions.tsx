import { dataActions } from './dataSlice';

export const dataToFetch = (currPage = 1) => {
	return async (dispatch: (arg0: { payload: any; type: string; }) => void) => {

		const getData = async () => {
			const response = await fetch(`http://localhost:3001/api/book?page=${currPage}`, {
				method: 'get',
			});

			if (!response.ok) {
				throw new Error(`Nie można pobrać danych...`);
			}

			const data = await response.json();
			return data;
		};

		dispatch(dataActions.loadingData());
		try {
			const data = await getData();
			dispatch(dataActions.fetchData(data));
		} catch (error) {
			console.log(error);
		}
	};
};