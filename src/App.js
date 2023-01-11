import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useRef, useState } from 'react';

function App() {
  const [name,setName] =useState('')
  const inputRef=useRef()
 const focusFn=()=>{
  inputRef.current.focus()
  inputRef.current.value='Some value'
 }
  return (
    <div  className="App">
    <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}/>
    <div>My name is {name}</div>
   <button onClick={focusFn}>Focus</button>
    </div>
  );
}

export default App;

