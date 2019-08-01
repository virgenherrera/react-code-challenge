import React from 'react';
import { tsExpressionWithTypeArguments } from '@babel/types';

export class InputComponent extends React.Component {
  render() {
      return (
          <div class="input-group mb-3">
              <div class="input-group">
                  <input
                  id="input-error" 
                  value={this.props.value}
                  onChange={this.props.handleChange}
                  type="text" 
                  class="form-control" 
                  placeholder="type your number" />
                  <div class="input-group-append">
                      <button 
                      onClick={(e) => this.props.clear(e)}
                      class="btn btn-outline-secondary" type="button">Reset</button>
                  </div>
                  <div class="error-message">
                      Value that you entered is not a number!
                  </div>
              </div>
          </div>
      );
  }
}


