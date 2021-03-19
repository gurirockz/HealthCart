import validator from 'is_js';

const checkEmpty = (val, key) => {

	if (validator.empty(val.trim())) {
		return `Please enter ${key}`;
	} else {
		return '';
	}
};

const checkMinLength = (val, minLength, key) => {

	if (val.trim().length < minLength) {
		return `minimum 3 characters required for ${key}`;
	} else {
		return '';
	}
    
};

export default function(data) {
	let error = '';
	const {name, email, lastName, password, phoneNumber, emailMobile,confirmPassword} = data;



	if (name !== undefined) {

		let emptyValidationText = checkEmpty(name, 'name');


		if (emptyValidationText !== '') {

			return emptyValidationText;

		} else {

			let minLengthValidation = checkMinLength(name, 3, 'name');

			if (minLengthValidation !== '') {
				return minLengthValidation;
			}
		}
	}


	if (email !== undefined) {
		let emptyValidationText = checkEmpty(email, 'email');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			if (!validator.email(email)) {
				return 'Please enter valid email';
			}
		}
	}



	if (password !== undefined) {
		let emptyValidationText = checkEmpty(password, 'password');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			let minLengthValidation = checkMinLength(password, 6, 'password');
			if (minLengthValidation !== '') {
				if(confirmPassword!=undefined){
					return "Password requires minimum 6 characters"
				}
				return "Password is incorrect";
			}
		}
	}
	if (confirmPassword !== undefined) {
		let emptyValidationText = checkEmpty(confirmPassword, 'confirmPassword');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} 
		if(confirmPassword!=password){
			return "Password and Confirm Password didn't matched"
		}
	}


	
}