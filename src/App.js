import React, { Component } from 'react';
import './App.css';
import { TextInput, TextArea } from './utils/form_helpers';
import Validation, { Validate } from './utils/form_helpers/Validation';
import { inputType } from './utils/Constants';
import { onChangeHandler } from './utils/form_helpers/FormMethods';

class App extends Component {
	constructor() {
		super();
		this.state = {
			formIsValid: false, //we will use this to track the overall form validity
			formControls: {
				firstName: {
					value: '',
					placeholder: 'Enter First Name',
					valid: false,
					touched: false,
					errorMessage: "",
					validationRules: [
						{
							validate: Validation.isRequired,
							message: "First Name is required"
						},
						{
							validate: Validation.minLength(3),
							message: "First Name must be greater than 2 character"
						}
					]
				},
				lastName: {
					value: '',
					placeholder: 'Enter Last Name',
					valid: false,
					touched: false,
					errorMessage: "",
					validationRules: [
						{
							validate: Validation.isRequired,
							message: "Last Name is required"
						},
						{
							validate: Validation.minLength(3),
							message: "Last Name must be greater than 2 character"
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
						},
						{
							validate: Validation.isEmail,
							message: "Email is incorrect"
						}
					]
				},
				password: {
					value: '',
					placeholder: 'Enter password',
					valid: false,
					touched: false,
					errorMessage: "",
					validationRules: [
						{
							validate: Validation.isRequired,
							message: "Password is required"
						}
					]
				},
				summary: {
					value: '',
					placeholder: 'Enter summary',
					rows: 5,
					valid: false,
					touched: false,
					errorMessage: "",
					validationRules: [
						{
							validate: Validation.isRequired,
							message: "Summary is required"
						}
					]
				}
			}
		}
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
						label="First Name"
						name="firstName"
						placeholder={this.state.formControls.firstName.placeholder}
						// helpText="firstName must be greater than 6 character"
						errorMessage={this.state.formControls.firstName.errorMessage}
						value={this.state.formControls.firstName.value}
						onChange={onChangeHandler(this)}
						touched={this.state.formControls.firstName.touched}
						valid={this.state.formControls.firstName.valid}
					/>
					<TextInput
						label="Last Name"
						name="lastName"
						placeholder={this.state.formControls.lastName.placeholder}
						// helpText="Last Name must be greater than 6 character"
						errorMessage={this.state.formControls.lastName.errorMessage}
						value={this.state.formControls.lastName.value}
						onChange={onChangeHandler(this)}
						touched={this.state.formControls.lastName.touched}
						valid={this.state.formControls.lastName.valid}
					/>
					<TextInput
						type={inputType.EMAIL}
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
					<TextInput
						type={inputType.PASSWORD}
						label="Password"
						name="password"
						placeholder={this.state.formControls.password.placeholder}
						// helpText="password"
						errorMessage={this.state.formControls.password.errorMessage}
						value={this.state.formControls.password.value}
						onChange={onChangeHandler(this)}
						touched={this.state.formControls.password.touched}
						valid={this.state.formControls.password.valid}
					/>

					<TextArea
						label="Summary"
						name="summary"
						placeholder={this.state.formControls.summary.placeholder}
						// helpText="summary"
						errorMessage={this.state.formControls.summary.errorMessage}
						value={this.state.formControls.summary.value}
						rows={this.state.formControls.summary.rows}
						onChange={onChangeHandler(this)}
						touched={this.state.formControls.summary.touched}
						valid={this.state.formControls.summary.valid}
					/>
					<button type="submit" className="btn-submit" disabled={!this.state.formIsValid}> Submit </button>
				</form>
			</div>
		);
	}
}

export default App;