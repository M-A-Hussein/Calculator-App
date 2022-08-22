import React, { useState } from 'react';
import { evaluate } from 'mathjs'

import './App.css';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const opers = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if(opers.includes(value) && calc === '' || 
      opers.includes(value) && opers.includes(calc.slice(-1))
      ) {
        return;
      }

    setCalc(calc + value);

     if(!opers.includes(value)){
      setResult(evaluate(calc + value));
     }
  }

 const createNumbers = () => {
  const numbers = [];

  for(let i = 1; i < 10; i++){
    numbers.push(
      <button onClick={() => updateCalc(i.toString())} 
      key={i}>{i}</button>
    )
  }
  return numbers;
 }

 const calculate = () =>{
  setCalc(evaluate(calc));
 }


 const deleteLast = () => {
  if(calc == ''){
    return;
  }
  const value  = calc.slice(0, -1);
  setCalc(value);
 }

 const deleteAll = () => {
  setCalc('')
  setResult('')
 }
  return (
      <div className='App'>
        <div className='calculator'>
          <div className='display'>
           { result ? <span>({result})</span>: '' } &nbsp;
           { calc || '0' }
          </div>
          <div className='operators'>
            <button onClick={()=>updateCalc('/')}>÷</button>
            <button onClick={()=>updateCalc('*')}>x</button>
            <button className='minus' onClick={()=>updateCalc('-')}>-</button>
            <button onClick={()=>updateCalc('+')}>+</button>

            <button onClick={deleteLast}>DEL</button>
            <button onClick={deleteAll}>AC</button>

          </div>
          <div className='numbers'>
            { createNumbers() }
            <button onClick={()=>updateCalc('0')}>0</button>
            <button className='dot'onClick={()=>updateCalc('.')}>.</button>
          </div>
          <div className='equal'>
            <button onClick={calculate}>=</button>
          </div>

        </div>
    </div>
  );}

export default App;