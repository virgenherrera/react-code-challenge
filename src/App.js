import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DateComponent } from './components/DateComponent';
import { InputComponent } from './components/InputComponent';
import { MultiplyComponent } from './components/MultiplyComponent';
import { PowComponent } from './components/PowComponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: null
    }

    this.isValid = this.isValid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear(e) {
    e.preventDefault();
    this.setState({
      input: ''
    }, this.validateInput(this.state.input));
  }

  isValid(input) { 
    return (!(isNaN(input)));
  }

  validateInput(input) {
    let inputEl = document.getElementById('input-error')
    let div = document.querySelector('div.error-message');

    if (!(this.isValid(input))) {
      inputEl.classList.add('is-invalid');

      div.classList.add('invalid-feedback');
    } else {
      inputEl.classList.remove('is-invalid');
    }
    // Return to initial value being incorrect
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      input: e.currentTarget.value
    }, this.validateInput(this.state.input));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Welcome to React Code Challenge!
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
  
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8">
              <InputComponent 
                value={this.state.input}
                clear={this.clear} 
                handleChange={this.handleChange}
               />
            </div>
          </div>
        </div>
  
        <div class="container">
          <div class="row">
            <div class="col-4">
              <MultiplyComponent
                value={this.state.input}
                isValid={this.isValid(this.state.input)}
              />
            </div>
            <div class="col-4">
              <PowComponent
                value={this.state.input}
                isValid={this.isValid(this.state.input)}
               />
            </div>
            <div class="col-4">
              <DateComponent
                value={this.state.input}
                isValid={this.isValid(this.state.input)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;