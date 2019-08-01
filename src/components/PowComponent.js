import React from 'react';

export class PowComponent extends React.Component {

    render() {
        return ((this.props.isValid && !!(this.props.value)) &&
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">pow value^value</h5>
                    <p class="card-text">{this.props.value * this.props.value}</p>
                </div>
            </div>
        );
    }
}