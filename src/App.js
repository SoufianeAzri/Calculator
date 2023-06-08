import { useState } from "react";
function App() {
  const [calc,setCalc] = useState("");
  const [result,setResult] = useState("");
  const [theme,setTheme] = useState(false);
  const operateur = ['/','+','-','*'];
  const updateCalc = (value) =>{
    if((operateur.includes(value) && calc === '') || (operateur.includes(value) && operateur.includes(calc.slice(-1)))){
      return;
    }
    setCalc(calc + value);
    if(!operateur.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }
  const createDigits = ()=>{
    const digits = [];
    for(let i = 1 ; i < 10 ; i++){
      digits.push(<button onClick={()=>updateCalc(i.toString())} key={i}>{i}</button>)
    }
    return digits;
  }
  const calculate = ()=>{
    setCalc(eval(calc).toString())
  }
  const deleteLast = ()=>{
    if(calc === ''){
      return;
    }
    const val = calc.slice(0,-1);
    setCalc(val);
  }
  return (
    <div className="App">
      <button style={{backgroundColor:'red'}} onClick={()=>setTheme(!theme)}>theme</button>
      <div className="calc">
        <div className="display" style={{backgroundColor: theme ? 'red' : false}}>
          {result ? <span>{result}</span> : ''}
          &nbsp;
          { calc || "0"}
        </div>
        <div className="operateurs">
          <button onClick={()=>updateCalc('/')}>/</button>
          <button onClick={()=>updateCalc('*')}>*</button>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button onClick={()=>updateCalc('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
        </div>
    </div>
  );
}

export default App;
