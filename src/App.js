import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { DateComponent } from './components/DateComponent';
import { InputComponent } from './components/InputComponent';
import { MultiplyComponent } from './components/MultiplyComponent';
import { PowComponent } from './components/PowComponent';

export default function App() {
  const [data, setData] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to React Code Challenge!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <InputComponent data={data} setData={setData} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <MultiplyComponent data={data} />
          </div>
          <div className="col-4">
            <PowComponent data={data} />
          </div>
          <div className="col-4">
            <DateComponent data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}