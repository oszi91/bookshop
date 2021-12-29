import { useDispatch } from 'react-redux';
import { bookInCart } from '../../../models/Book.model';
import { cartActions } from '../../../store/cart/cartSlice';

const CartItem: React.FC<bookInCart> = ({
	id,
	quantity,
	author,
	cover_url,
	title,
	pages,
}) => {
	const dispatch = useDispatch();
	const productDataToCart = {
		id,
		quantity: 0,
		author,
		cover_url,
		title,
		pages,
	};

	const addToCartHandle = () => {
		dispatch(cartActions.addToCart(productDataToCart));
	};

	const removeOneItemFromCartHandle = () => {
		dispatch(cartActions.removeFromCart({ id, removeCompletely: false }));
	};

	const removeItemCompletelyFromCartHandle = () => {
		dispatch(cartActions.removeFromCart({ id, removeCompletely: true }));
	};

	return (
		<div className="d-flex flex-column flex-sm-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded shadow">
			<div className="mr-1">
				<img
					className="rounded"
					src={cover_url}
					alt={title + author}
					width="70"
				/>
			</div>
			<div
				className="d-flex flex-column align-items-center product-details"
				style={{ width: '75%' }}
			>
				<span className="font-weight-bold">{title}</span>
				<div className="d-flex flex-row product-desc">
					<span className="font-weight-bold">{author}</span>
				</div>
			</div>
			<div className="d-flex flex-row align-items-center qty">
				<i
					role="button"
					onClick={removeOneItemFromCartHandle}
					className="fa fa-minus text-danger "
				></i>
				<h5 className="text-grey mt-1 mr-1 ml-1 p-1">{quantity}</h5>
				<i
					role="button"
					onClick={addToCartHandle}
					className="fa fa-plus text-success"
				></i>
			</div>
			<div className="d-flex align-items-center">
				<i
					role="button"
					onClick={removeItemCompletelyFromCartHandle}
					className="fa fa-trash mb-1 dark"
				></i>
			</div>
		</div>
	);
};

export default CartItem;
