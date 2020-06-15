import { Validate } from "./Validation";

export const onChangeHandler = (ctx, onUpdateCallback) => (event) => {
	const name = event.target.name;
	const value = event.target.value;

	const updatedControls = {
		...ctx.state.formControls
	};
	const updatedFormElement = {
		...updatedControls[name]
	};
	updatedFormElement.value = value;
	updatedFormElement.touched = true;
	const { message } = Validate(value, updatedFormElement.validationRules);

	updatedFormElement.valid = message ? false : true;
	updatedFormElement.errorMessage = message;

	updatedControls[name] = updatedFormElement;

	let formIsValid = true;
	for (let inputIdentifier in updatedControls) {
		formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
	}

	ctx.setState({
		formControls: updatedControls,
		formIsValid
	}, () => {
		if (onUpdateCallback)
			onUpdateCallback();
	});
}