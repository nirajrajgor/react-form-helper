import React from 'react';

const Radio = ({
	touched,
	valid,
	label,
	value,
	errorMessage,
	helpText,
	options,
	...props
}) => {
	let formControl = "form-control";

	if (touched && !valid) {
		formControl = "form-control control-error";
	}
	return (
		<div className="form-group">
			<label htmlFor={props.name}>{label}</label>
			{
				options.map(option => (
					<div className="radio-group" key={option.value}>
						<input
							type="radio"
							className={formControl}
							id={option.text}
							checked={value === option.value ? true : null}
							value={option.value}
							{...props}
						/>
						<label htmlFor={option.text}>{option.text}</label>
					</div>
				))
			}

			{/* Help text or Error */}
			<div className={errorMessage ? "info-text error-text" : "info-text"}>{errorMessage ? errorMessage : helpText}</div>
		</div>
	);
}

export default Radio;