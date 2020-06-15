import React from 'react';

export class PowComponent extends React.Component {
    render() {
        const {data} = this.props;

        return !data
        ? null
        : (
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">pow value^value</h5>
                    <p className="card-text">computed value here!!!</p>
                </div>
            </div>
        );
    }
}