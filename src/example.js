import React, { useState } from 'react';

import './App.css';

function App() {

  

  const numbers = ['1','2','3','4', '5', '6', '7', '8', '9', '0',  '-', '÷', 'x', '='];
  const [number, setNumber] = useState('')

 


function handleClick(theNumber){
  return (theNumber)
};

const changeHandler = event => {
  const newValue = event.target.value;
  setNumber(newValue);
  };

  return (
    <div className='wrapper'>
      <div className='App'>
        <h1>CALCULATOR</h1>
        <input type="text" value={number}onChange={changeHandler}></input>
        <br/>
        {numbers.map((currentNumber, index)=>{
        return <>
        
        <button key={index} onClick={()=>handleClick(currentNumber, index)}>{currentNumber}</button>
        </>
        
        })}
        
        {/* <input type="text" id="inputField" name="" value={count}></input>
        <div className='calButtons'>
        <button className='numButtons'>1</button>
        <button className='numButtons'>2</button>
        <button className='numButtons'>3</button>
        <button className='numButtons' onClick={divide}>÷</button>
    
        <button className='numButtons'>4</button>
        <button className='numButtons'>5</button>
        <button className='numButtons'>6</button>
        <button className='numButtons' onClick={multiply}>x</button>

        <button className='numButtons'>7</button>
        <button className='numButtons'>8</button>
        <button className='numButtons'>9</button>
        <button className='numButtons' onClick={subtract}>-</button>

           
        <button className="bigButton">0</button>
        <button className="dotButton">.</button>
        <button className="bigButton" type="submit"onClick={equal}>=</button>
        <button className='plusButton'onClick={add}>+</button>
      
    
        
        </div>
       */}
      </div>
    </div>
  );}

export default App;