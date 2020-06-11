import React, { Component } from 'react';
import './App.css';
import { TextInput } from './utils/form_helpers';

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
						minLength: 3
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
		updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

		updatedControls[name] = updatedFormElement;

		this.setState({
			formControls: updatedControls
		});
	}

	render() {
		return (
			<div className="App">
				<h2>Form helper</h2>
				<form>
					<label htmlFor="name">Name{' '}</label>
					<TextInput
						id="name"
						name="name"
						placeholder={this.state.formControls.name.placeholder}
						value={this.state.formControls.name.value}
						onChange={this.changeHandler}
					/>
				</form>
			</div>
		);
	}
}

export default App;