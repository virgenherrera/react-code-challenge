import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DateComponent } from './components/DateComponent';
import { InputComponent } from './components/InputComponent';
import { MultiplyComponent } from './components/MultiplyComponent';
import { PowComponent } from './components/PowComponent';

export default class App extends React.Component {
	state = { data: '' };

	setData(data) {
		this.setState({ data });
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Welcome to React Code Challenge!</h1>
					<img src={logo} className="App-logo" alt="logo" />
				</header>

				<div className="container">
					<div className="row justify-content-center">
						<div className="col-8">
							<InputComponent setData={this.setData} data={this.state.data} />
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-4">
							<MultiplyComponent data={this.state.data} />
						</div>
						<div className="col-4">
							<PowComponent data={this.state.data} />
						</div>
						<div className="col-4">
							<DateComponent data={this.state.data} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
