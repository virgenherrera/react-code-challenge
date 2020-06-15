import React from 'react';
import moment from 'moment';

export class DateComponent extends React.Component {
    
    render() {
        const {data} = this.props;
        
        return !data
        ? null
        : (
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">{moment(data).format('YYYY/MM/DD HH:MM')}</h5>
                    <p className="card-text">computed value here!!!</p>
                </div>
            </div>
        );
    }
}