import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  // let firstValue:string = 'Manny';
  // let firstValue:number = 67;
  // let firstValue:number[] = [2,3,44];
  let firstValue:Array<string> = ['a','ff',"sdf"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        The value {firstValue} is of {typeof firstValue } type!
        </p>
       
      </header>
    </div>
  );
}

export default App;
