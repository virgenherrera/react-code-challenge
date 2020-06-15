import React from 'react';

export class InputComponent extends React.Component {
    onInputChange(arg) {
        this.props.setData(
            !isNaN(arg)? Number(arg) : ''
        );
    }

    onReset() {
        this.props.setData('');
    }

    render() {
        const {data} = this.props;

        return (
            <div className="input-group mb-3">
                <div className="input-group">
                    <input
                        type="text"
                        className={'form-control ' + !data ? 'is-invalid' : ''}
                        placeholder="type your Number"
                        value={data}
                        onChange={(ev) => this.onInputChange(ev.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.onInputChange.bind(this)}>Reset</button>
                    </div>
                    {!data && <div className="text-danger">
                        Value that you entered is not a number!
                    </div>}
                </div>
            </div>
        );
    }
}


