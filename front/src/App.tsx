import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { dataToFetch } from './store/data/dataActions';

import Books from './components/Books/Books';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';

const App: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(dataToFetch());
	}, [dispatch]);

	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Books} />
				<Route path="/cart" component={Cart} />
				<Route path="/formularz" component={Checkout} />
				<Route path="/:id" component={Books} />
			</Switch>
		</Router>
	);
};

export default App;
