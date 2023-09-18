import React, { useState } from 'react';

function CalculatorFunction() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState();

  // Function to perform operations
  const performOperation = (operation) => {
    switch (operation) {
      case 'add':
        setResult(num1 + num2);
        break;
      case 'subtract':
        setResult(num1 - num2);
        break;
      case 'multiply':
        setResult(num1 * num2);
        break;
      case 'divide':
        setResult(num1 / num2);
        break;
      default:
        setResult();
    }
  };

  return (
    <div>
      <center>
      <h1>Calculator</h1>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} /> <br /><br />
      <button onClick={() => performOperation('add')}>Add</button>
      <button onClick={() => performOperation('subtract')}>Subtract</button><br />
      <button onClick={() => performOperation('multiply')}>Multiply</button>
      <button onClick={() => performOperation('divide')}>Divide</button>
      <p>Result: {result}</p>
      </center>
    </div>
  );
}

export default CalculatorFunction;
