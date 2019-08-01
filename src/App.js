import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DateComponent } from './components/DateComponent';
import { InputComponent } from './components/InputComponent';
import { MultiplyComponent } from './components/MultiplyComponent';
import { PowComponent } from './components/PowComponent';

export default function App() {
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
            <InputComponent />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-4">
            <MultiplyComponent />
          </div>
          <div class="col-4">
            <PowComponent />
          </div>
          <div class="col-4">
            <DateComponent />
          </div>
        </div>
      </div>
    </div>
  );
}