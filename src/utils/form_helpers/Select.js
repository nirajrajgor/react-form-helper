import React from 'react';

const Select = ({
	touched,
	valid,
	label,
	value,
	errorMessage,
	helpText,
	options,
	placeholder,
	...props
}) => {
	let formControl = "form-control";

	if (touched && !valid) {
		formControl = "form-control control-error";
	}
	return (
		<div className="form-group">
			<label htmlFor={props.name}>{label}</label>
			<select className={formControl} id={props.name} {...props} >
				{
					placeholder ? <option value="">{placeholder}</option> : null
				}
				{
					options.map(option => (
						<option value={option.value} selected={value === option.value ? true : null}>
							{option.text}
						</option>
					))
				}
			</select>
			{/* Help text or Error */}
			<div className={errorMessage ? "info-text error-text" : "info-text"}>{errorMessage ? errorMessage : helpText}</div>
		</div>
	);
}

export default Select;