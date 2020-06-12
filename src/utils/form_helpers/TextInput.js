import React from 'react';
import { inputType } from '../Constants';

const TextInput = ({
	type = inputType.TEXT,
	touched,
	valid,
	label,
	errorMessage,
	helpText,
	...props
}) => {
	let formControl = "form-control";

	if (touched && !valid) {
		formControl = "form-control control-error";
	}
	return (
		<div className="form-group">
			<label htmlFor={props.name}>{label}</label>
			<input type={type} className={formControl} id={props.name} {...props} />
			{/* Help text or Error */}
			<div className={errorMessage ? "info-text error-text" : "info-text"}>{errorMessage ? errorMessage : helpText}</div>
		</div>
	);
}

export default TextInput;