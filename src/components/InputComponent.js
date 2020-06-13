import React from 'react';

export class InputComponent extends React.Component {
	state = { isValid: null };
	constructor(props) {
		super(props);
		this.setData = props.setData;
	}

	handleChange(event) {
		const isValid = !isNaN(event.target.value);
		const dataTwo = isValid ? event.target.value : '';
		console.log(isValid, dataTwo);
		this.setState({ isValid });
		this.setData(dataTwo);
	}

	handleReset() {
		const isValid = null;
		this.setState({ isValid });
		this.props.setData('');
	}

	render() {
		return (
			<div className="input-group mb-3">
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						onChange={(event) => this.handleChange(event)}
						placeholder="Type your Number"
						className={this.state.isValid ? 'is-valid' : 'is-invalid'}
						value={this.props.data}
					/>
					<div className="input-group-append">
						<button
							className="btn btn-outline-secondary"
							type="button"
							onClick={() => this.handleReset()}
						>
							Reset
						</button>
					</div>
					{this.state.isValid ? (
						<div>Value that you entered is a number! </div>
					) : (
						<div
							className="error-message"
							className={this.state.isValid ? '' : 'invalid-feedback'}
						>
							Value that you entered is not a number!{' '}
						</div>
					)}
				</div>
			</div>
		);
	}
}
