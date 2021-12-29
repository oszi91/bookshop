import { useDispatch } from 'react-redux';
import { book } from '../../../models/Book.model';
import { cartActions } from '../../../store/cart/cartSlice';

const Book: React.FC<book> = ({ id, author, cover_url, pages, title }) => {
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

	return (
		<div className="col mb-4">
			<div className="card shadow">
				<img className="card-img-top" src={cover_url} alt={author + title} />
				<div className="card-body text-center">
					<h5 className="card-title">{title}</h5>
					<div className="d-flex flex-column">
						<h6>{author}</h6>
						<p>{pages} stron</p>
						<button
							onClick={addToCartHandle}
							type="button"
							className="btn btn-dark text-white"
						>
							DODAJ DO KOSZYKA
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Book;
