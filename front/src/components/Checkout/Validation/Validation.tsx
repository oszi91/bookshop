import userInfo from "../../../models/UserInfo.model";
import ERRORS_WARNING from "./ERRORS_WARNING";
import { hasNumber, isValidZip } from './regexValidation';

export const Validation = (data: userInfo) => {
	let errorsList = {};

	if (data.name.length < 3 || hasNumber(data.name)) {
		errorsList = {
			...errorsList,
			name: ERRORS_WARNING.main,
		};
	}

	if (data.surname.length < 3 || hasNumber(data.surname)) {
		errorsList = {
			...errorsList,
			surname: ERRORS_WARNING.main,
		};
	}

	if (data.city.length < 3 || hasNumber(data.city)) {
		errorsList = {
			...errorsList,
			city: ERRORS_WARNING.main,
		};
	}

	if (!isValidZip(data.postCode)) {
		errorsList = {
			...errorsList,
			postCode: ERRORS_WARNING.postCode,
		};
	}

	return errorsList;
};
