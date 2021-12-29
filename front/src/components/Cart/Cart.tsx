import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../store';
import CartItem from './subcomponents/CartItem';

const Cart: React.FC = () => {
	const booksInCart = useSelector((state: RootState) => state.cart.cartData);
	const cartQuantity = useSelector(
		(state: RootState) => state.cart.cartQuantity
	);
	return (
		<>
			{booksInCart.length ? (
				<div className="container mt-5 mb-5 text-center">
					<div className="d-flex justify-content-center row">
						<div className="col-sm-12 col-md-10 col-lg-8">
							<div className="p-2">
								<h4>Twoje książki ({cartQuantity})</h4>
							</div>
							{booksInCart.map(book => {
								return <CartItem key={book.id} {...book} />;
							})}
							<div className="d-flex flex-row justify-content-center mt-3 p-2 bg-white rounded">
								<Link
									to="/formularz"
									className="btn btn-dark center-block btn-lg ml-2"
									type="button"
								>
									DALEJ
								</Link>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="vh-100 d-flex justify-content-center align-items-center text-center">
					<h1>Twój koszyk jest pusty.</h1>
				</div>
			)}
		</>
	);
};

export default Cart;
