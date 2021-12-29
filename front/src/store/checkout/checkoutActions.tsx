import { cartActions } from '../cart/cartSlice';
import { checkoutActions } from './checkoutSlice';

import { bookInCart } from '../../models/Book.model';
import userInfo from '../../models/UserInfo.model';

import changeZipCodeFormat from '../../utils/changeZipCodeFormat';

export const sendData = () => {
	return async (
		dispatch: (arg0: { payload: any; type: string }) => void,
		getState: () => {
			cart: {
				cartData: bookInCart[];
			};
			checkout: {
				userInfo: userInfo;
			};
		}
	) => {
		const cartData = getState().cart.cartData;
		const order = cartData.map(
			({ author, cover_url, pages, title, ...orderInfo }) => orderInfo
		);
		const userInfo = getState().checkout.userInfo;

		const orderInfoToSend = {
			order,
			first_name: userInfo.name,
			last_name: userInfo.surname,
			city: userInfo.city,
			zip_code: changeZipCodeFormat(userInfo.postCode),
		};

		const sendOrder = async () => {
			const response = await fetch('http://localhost:3001/api/order', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(orderInfoToSend),
			});

			if (!response.ok) {
				throw new Error(`Nie można wysłać danych...`);
			}

			const sendData = await response.json();
			return sendData;
		};
		try {
			await sendOrder();
			dispatch(cartActions.reset());
			dispatch(checkoutActions.reset());
			dispatch(checkoutActions.checkoutSuccess(true));
		} catch (error) {
			console.log(error);
		}
	};
};
