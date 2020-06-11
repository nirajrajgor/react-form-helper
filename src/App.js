import React, { Component } from 'react';
import './App.css';
import { TextInput, Validate } from './utils/form_helpers';

class App extends Component {
	constructor() {
		super();
		this.state = {
			formControls: {
				name: {
					value: '',
					placeholder: 'What is your name',
					valid: false,
					touched: false,
					validationRules: {
						minLength: 3,
						isRequired: true
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
		updatedFormElement.valid = Validate(value, updatedFormElement.validationRules);

		updatedControls[name] = updatedFormElement;

		this.setState({
			formControls: updatedControls
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
				<form onSubmit={this.formSubmitHandler}>
					<label htmlFor="name">Name{' '}</label>
					<TextInput
						id="name"
						name="name"
						placeholder={this.state.formControls.name.placeholder}
						value={this.state.formControls.name.value}
						onChange={this.changeHandler}
					/>
					<button type="submit"> Submit </button>
				</form>
			</div>
		);
	}
}

export default App;