import React from 'react';

const TextInput = ({ touched, valid, label, ...props }) => {
	let formControl = "form-control";

	if (touched && !valid) {
		formControl = "form-control control-error";
	}
	return (
		<div className="form-group">
			<label htmlFor={props.name}>{label}</label>
			<input type="text" className={formControl} id={props.name} {...props} />
		</div>
	);
}

export default TextInput;