const Validate = (value, rules) => {
	let isValid = true;
	let message = "";

	outer_loop:
	for (let rule in rules) {
		switch (rule) {
			case 'isRequired':
				isValid = isValid && requiredValidator(value);
				message = isValid ? "" : rules[rule].message;
				break;
			case 'minLength':
				isValid = isValid && minLengthValidator(value, rules[rule].value);
				message = isValid ? "" : rules[rule].message;
				break;
			case 'isEmail':
				isValid = isValid && emailValidator(value);
				message = rule.message;
				break;
			default:
				isValid = true;
		}
		if (!isValid)
			break outer_loop;

	}

	return { isValid, message };
}


/**
 * minLength Val
 * @param  value
 * @param  minLength
 * @return
 */
const minLengthValidator = (value, minLength) => {
	return value.length >= minLength;
}

/**
 * Check to confirm that feild is required
 *
 * @param  value
 * @return
 */
const requiredValidator = value => {
	if (Array.isArray(value))
		return value.length !== 0;
	return value.trim().length !== 0;
}

/**
 * Email validation
 *
 * @param value
 * @return
 */
const emailValidator = value => {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
	return re.test(String(value).toLowerCase());
}


export default Validate;