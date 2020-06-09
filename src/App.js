import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			formControls: {
				email: {
					value: ''
				},
				name: {
					value: ''
				},
				password: {
					value: ''
				}
			}
		}
	}

	changeHandler = event => {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			formControls: {
				...this.state.formControls,
				[name]: {
					...this.state.formControls[name],
					value
				}
			}
		});
	}

	render() {
		return (
			<div className="App">
				<h2>Form helper</h2>
				<form>
					<label htmlFor="email">Email{' '}</label>
					<input type="email"
						name="email"
						value={this.state.formControls.email.value}
						onChange={this.changeHandler}
					/>

					<br /><br />
					<label htmlFor="name">Name{' '}</label>
					<input type="text"
						name="name"
						value={this.state.formControls.name.value}
						onChange={this.changeHandler}
					/>

					<br /><br />
					<label htmlFor="password">Password{' '}</label>
					<input type="password"
						name="password"
						value={this.state.formControls.password.value}
						onChange={this.changeHandler}
					/>
				</form>
			</div>
		);
	}
}

export default App;