import React from 'react';

export class MultiplyComponent extends React.Component {
  render() {
    return ((this.props.isValid && !!(this.props.value)) &&
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">value*2</h5>
                    <p class="card-text">{this.props.value * 2}</p>
                </div>
            </div>
        );
    }
}