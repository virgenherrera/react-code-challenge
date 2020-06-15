import React from "react";

export class MultiplyComponent extends React.Component {
  render() {
    const { data } = this.props;

    return !data
    ? null
    :(
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">value*2</h5>
          <p className="card-text">{data * 2}</p>
        </div>
      </div>
    );
  }
}
