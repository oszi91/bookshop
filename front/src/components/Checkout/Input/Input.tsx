import { useDispatch } from 'react-redux';
import { checkoutActions } from '../../../store/checkout/checkoutSlice';
import input from '../../../models/Input.model';

const Input: React.FC<input> = ({
	dispatchFieldName,
	labelText,
	id,
	placeholder,
	error,
	state,
}) => {
	const dispatch = useDispatch();

	return (
		<div className="col-md-6">
			<label htmlFor={id} className="form-label">
				{labelText}
			</label>
			<input
				type="text"
				className="form-control"
				value={state}
				onChange={e =>
					dispatch(
						checkoutActions.checkoutHandle({
							fieldName: dispatchFieldName,
							userData: e.currentTarget.value,
						})
					)
				}
				name={id}
				id={id}
				placeholder={placeholder}
			/>
			{error && (
				<div className="text-danger">
					<small>{error}</small>
				</div>
			)}
		</div>
	);
};

export default Input;
