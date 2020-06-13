import React from 'react';

export class PowComponent extends React.Component {
	pow(data) {
		return data * data;
	}
	render() {
		const { data } = this.props;
		return (
			<div className="card text-center">
				<div className="card-body">
					<h5 className="card-title">pow value^value</h5>
					{isNaN(data) ? (
						<p className="card-text">Computed value here!!!</p>
					) : (
						<p className="card-title">{this.pow(this.props.data)}</p>
					)}
				</div>
			</div>
		);
	}
}
