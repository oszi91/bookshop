import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bookInCart } from '../../models/Book.model';

interface SliceState {
	cartQuantity: number;
	cartData: bookInCart[];
}

interface removeCart {
	id: number;
	removeCompletely: boolean;
}

const initialState: SliceState = {
	cartQuantity: 0,
	cartData: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<bookInCart>) {
			state.cartQuantity++;

			const newProduct = action.payload;
			const existingProduct = state.cartData.find(
				product => product.id === newProduct.id
			);

			if (!existingProduct) {
				state.cartData = [...state.cartData, { ...newProduct, quantity: 1 }];
			} else {
				existingProduct.quantity++;
			}
		},
		removeFromCart(state, action: PayloadAction<removeCart>) {
			const { id, removeCompletely } = action.payload;
			const existingProduct = state.cartData.find(product => product.id === id);

			if (removeCompletely && existingProduct) {
				state.cartQuantity = state.cartQuantity - existingProduct.quantity;
			} else {
				state.cartQuantity--;
			}

			if (existingProduct?.quantity === 1 || removeCompletely) {
				state.cartData = state.cartData.filter(product => product.id !== id);
			} else {
				if (existingProduct) {
					existingProduct.quantity--;
				}
			}
		},
		reset() {
			return initialState;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
