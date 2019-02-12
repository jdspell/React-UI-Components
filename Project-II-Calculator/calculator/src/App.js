import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  const buttons = {
    clear: "clear",
    multiply: "x",
    divide: "÷",
    subtract: "-",
    add: "+",
    equals: "=",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  }
  return (
    <div className="calculator">
      <CalculatorDisplay />

      <ActionButton buttonStyle="action" text="clear"/>
      <NumberButton buttonStyle="red" text="÷"/>

      <NumberButton buttonStyle="white" text="7"/>
      <NumberButton buttonStyle="white" text="8"/>
      <NumberButton buttonStyle="white" text="9"/>
      <NumberButton buttonStyle="red" text="x"/>

      <NumberButton buttonStyle="white" text="4"/>
      <NumberButton buttonStyle="white" text="5"/>
      <NumberButton buttonStyle="white" text="6"/>
      <NumberButton buttonStyle="red" text="-"/>

      <NumberButton buttonStyle="white" text="1"/>
      <NumberButton buttonStyle="white" text="2"/>
      <NumberButton buttonStyle="white" text="3"/>
      <NumberButton buttonStyle="red" text="+"/>

      <ActionButton buttonStyle="action" text="0"/>
      <NumberButton buttonStyle="red" text="="/>
    </div>
  );
};

export default App;
