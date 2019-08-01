import React from 'react';

export class DateComponent extends React.Component {
    render() {
        return (
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">date in YY/MM/DD HH:MM</h5>
                    <p class="card-text">computed value here!!!</p>
                </div>
            </div>
        );
    }
}