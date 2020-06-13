import React from 'react';

export class DateComponent extends React.Component {
	toDate(data) {
		let hours = Math.floor(data / 3600);
		let minutes = Math.floor((data % 3600) / 60);
		let seconds = data % 60;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;
		let result = hours + ':' + minutes + ':' + seconds;
		return result;
	}
	render() {
		const { data } = this.props;
		return (
			<div className="card text-center">
				<div className="card-body">
					<h5 className="card-title">date in YY/MM/DD HH:MM</h5>
					{isNaN(data) ? (
						<p className="card-text">computed value here!!!</p>
					) : (
						<p className="card-text">{this.toDate(data)}</p>
					)}
				</div>
			</div>
		);
	}
}
