import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { checkoutActions } from '../../../store/checkout/checkoutSlice';

const Confirmation: React.FC = () => {
	const history = useHistory();
	const [seconds, setSeconds] = useState(5);

	const dispatch = useDispatch();

	useEffect(() => {
		let timer: null | ReturnType<typeof setTimeout> = null;
		if (seconds > 0) {
			timer = setTimeout(() => setSeconds(seconds - 1), 1000);
		} else {
			history.push('/');
			dispatch(checkoutActions.checkoutSuccess(false));
		}
		return () => global.clearTimeout(timer as ReturnType<typeof setTimeout>);
	});

	return (
		<div className="vh-100 d-flex flex-column justify-content-center align-items-center">
			<h1>Zamówienie w realizacji, dziękujemy za zakupy.</h1>
			<h2>
				Zostaniesz przekierowany na stronę główną za{' '}
				<span className="text-info">{seconds}</span> sekund.
			</h2>
		</div>
	);
};

export default Confirmation;
