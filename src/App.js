import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {
  const [number,setNumber] = useState(0)
  const [dark,setDark] = useState(false)
  console.log(dark)
  const doubleNumber=useMemo(()=>slowFunction(number),[number])
  const themeStyles={
    backgroundColor:dark?'black':'white',
    color:dark?'white':'black'
  }
  return (
    <div className="App">
    <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
    <button onClick={()=>setDark(prevdark=>!prevdark)}>Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

export default App;

function slowFunction(num){
  console.log('Calling slow function')
  for (let i=0; i<=1000000000;i++){}
    return num*2
  
}