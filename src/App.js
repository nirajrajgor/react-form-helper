import React, { Component } from 'react';
import './App.css';
import { TextInput, Validate } from './utils/form_helpers';
import { inputType } from './utils/Constants';

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
					validationRules: {

						isRequired: {
							message: "Name is required",
						},
						minLength: {
							value: 2,
							message: "Min length is required",
						}
					}
				}
			}
		}
	}

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
		const { isValid, message } = Validate(value, updatedFormElement.validationRules);

		updatedFormElement.valid = isValid;
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
						onChange={this.changeHandler}
						touched={this.state.formControls.name.touched}
						valid={this.state.formControls.name.valid}
					/>
					<button type="submit" className="btn-submit" disabled={!this.state.formIsValid}> Submit </button>
				</form>
			</div>
		);
	}
}

export default App;