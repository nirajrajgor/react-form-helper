import React from 'react';

const TextArea = ({
	touched,
	valid,
	label,
	value,
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
			<textarea className={formControl} id={props.name} {...props} >
				{value}
			</textarea>
			{/* Help text or Error */}
			<div className={errorMessage ? "info-text error-text" : "info-text"}>{errorMessage ? errorMessage : helpText}</div>
		</div>
	);
}

export default TextArea;