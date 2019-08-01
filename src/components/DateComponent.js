import React from 'react';

export class DateComponent extends React.Component {
    constructor() {
      super();
      this.formatDate = this.formatDate.bind(this);
    }
  
    formatDate(value) {
      let date = new Date(value);
      return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`
    }
    
    render() {
        let {value, isValid} = this.props;
        console.log(value);
        return ((isValid && !!(value)) &&
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">date in YY/MM/DD HH:MM</h5>
                    <p class="card-text">{this.formatDate(value)}</p>
                </div>
            </div>
        );
    }
}