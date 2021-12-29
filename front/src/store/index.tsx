import { configureStore } from '@reduxjs/toolkit';

import cart from './cart/cartSlice';
import checkout from './checkout/checkoutSlice';
import data from './data/dataSlice';

const store = configureStore({
	reducer: { data, cart, checkout },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
