/**
* Validate
* @param  value
* @param  rules i.e validation rules.
* @return
*/
export const Validate = (value, rules) => {
	const invalidRule = rules.find(rule => {
		return !rule.validate(value);
	});
	if (invalidRule)
		return invalidRule;
	return { message: "" };
}

class Validation {

	/**
	 * minLength Val
	 * @param  value
	 * @param  minLength
	 * @return
	 */
	static minLength = minLength => value => {
		return value.length >= minLength;
	}

	/**
	 * Check to confirm that feild is required
	 *
	 * @param  value
	 * @return
	 */
	static isRequired = value => {
		if (Array.isArray(value))
			return value.length !== 0;
		if (typeof value === 'string')
			return value.trim().length !== 0;
		return true;
	}

	/**
	 * Email validation
	 *
	 * @param value
	 * @return
	 */
	static isEmail = value => {
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
		return re.test(String(value).toLowerCase());
	}
}


export default Validation;