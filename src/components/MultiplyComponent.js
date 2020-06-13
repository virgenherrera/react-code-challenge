import React from 'react';

export class MultiplyComponent extends React.Component {
	multiplyData(data) {
		return 2 * data;
	}
	render() {
		const { data } = this.props;
		//console.clear();
		//console.log(data);
		return !data ? (
			data
		) : (
			<div className="card text-center">
				<div className="card-body">
					<h5 className="card-title">value*2</h5>
					<p className="card-text">Computed value here!!!</p>
					<p className="card-title">{this.multiplyData(data)} </p>
				</div>
			</div>
		);
	}
}
