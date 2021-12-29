import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import './header.css';

const Header: React.FC = () => {
	const cartQuantity = useSelector(
		(state: RootState) => state.cart.cartQuantity
	);

	return (
		<header className="navbar bg-dark shadow">
			<div className="container">
				<Link to="/" className="navbar-brand text-white">
					BookShop
				</Link>
				<div className="cart">
					<Link className="cart__link" to="/cart">
						<i className="fas fa-shopping-cart"></i>
						<div className="cart__circle">{cartQuantity}</div>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
