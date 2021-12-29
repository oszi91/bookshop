import { useDispatch, useSelector } from 'react-redux';

import { sendData } from '../../store/checkout/checkoutActions';
import { checkoutActions } from '../../store/checkout/checkoutSlice';
import { RootState } from '../../store/index';

import Confirmation from './Confirmation/Confirmation';
import Input from './Input/Input';
import { Validation } from './Validation/Validation';

const Checkout: React.FC = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector((state: RootState) => state.checkout.userInfo);
	const errors = useSelector((state: RootState) => state.checkout.errors);
	const success = useSelector((state: RootState) => state.checkout.success);

	const { name, surname, postCode, city } = userInfo;

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (Object.keys(Validation(userInfo)).length === 0) {
			dispatch(sendData());
		} else {
			dispatch(checkoutActions.checkoutErrors(Validation(userInfo)));
		}
	};

	return (
		<div className="container">
			{success ? (
				<Confirmation />
			) : (
				<div className="vh-100 d-flex justify-content-center align-items-center">
					<form className="row g-3 needs-validation" onSubmit={onSubmit}>
						<Input
							dispatchFieldName="name"
							placeholder="Imię..."
							labelText="Imię"
							id="name"
							state={name}
							error={errors.name}
						/>
						<Input
							dispatchFieldName="surname"
							placeholder="Nazwisko..."
							labelText="Nazwisko"
							id="surname"
							state={surname}
							error={errors.surname}
						/>
						<Input
							dispatchFieldName="postCode"
							placeholder="Kod pocztowy (XXXXX)"
							labelText="Kod pocztowy"
							id="postCode"
							state={postCode}
							error={errors.postCode}
						/>
						<Input
							dispatchFieldName="city"
							placeholder="Miasto..."
							labelText="Miasto"
							id="city"
							state={city}
							error={errors.city}
						/>
						<div className="col-md-12 text-center">
							<button type="submit" className="btn btn-dark btn-lg mt-5">
								ZAMAWIAM I PŁACĘ
							</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default Checkout;
