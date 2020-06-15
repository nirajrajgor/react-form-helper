import React, { Component } from 'react';
import './App.css';
import { TextInput } from './utils/form_helpers';
import Validation, { Validate } from './utils/form_helpers/Validation';
import { inputType } from './utils/Constants';
import { onChangeHandler } from './utils/form_helpers/FormMethods';

class App extends Component {
	constructor() {
		super();
		this.state = {
			formIsValid: false, //we will use this to track the overall form validity
			formControls: {
				name: {
					value: '',
					placeholder: 'What is your name',
					valid: false,
					touched: false,
					errorMessage: "",
					validationRules: [
						{
							validate: Validation.isRequired,
							message: "Name is required"
						},
						{
							validate: Validation.minLength(6),
							message: "minlength is required"
						}
					]
				},
				email: {
					value: '',
					placeholder: 'Enter email',
					valid: false,
					touched: false,
					errorMessage: "",
					validationRules: [
						{
							validate: Validation.isRequired,
							message: "Email is required"
						}
					]
				}
			}
		}
	}


	/*
	No need to write in every component. Made common function for it.
	changeHandler = event => {
		const name = event.target.name;
		const value = event.target.value;

		const updatedControls = {
			...this.state.formControls
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

		this.setState({
			formControls: updatedControls,
			formIsValid
		});
	}
	*/

	formSubmitHandler = (e) => {
		e.preventDefault();
		console.dir(this.state.formControls);
	}

	render() {
		return (
			<div className="App">
				<h2>Form helper</h2>
				<form onSubmit={this.formSubmitHandler} autoComplete="off">
					<TextInput
						label="Name"
						name="name"
						placeholder={this.state.formControls.name.placeholder}
						// helpText="Name must be greater than 6 character"
						errorMessage={this.state.formControls.name.errorMessage}
						value={this.state.formControls.name.value}
						onChange={onChangeHandler(this)}
						touched={this.state.formControls.name.touched}
						valid={this.state.formControls.name.valid}
					/>
					<TextInput
						label="Email Address"
						name="email"
						placeholder={this.state.formControls.email.placeholder}
						helpText="email must include @"
						errorMessage={this.state.formControls.email.errorMessage}
						value={this.state.formControls.email.value}
						onChange={onChangeHandler(this)}
						touched={this.state.formControls.email.touched}
						valid={this.state.formControls.email.valid}
					/>
					<button type="submit" className="btn-submit" disabled={!this.state.formIsValid}> Submit </button>
				</form>
			</div>
		);
	}
}

export default App;