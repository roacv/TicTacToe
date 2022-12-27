import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Aqui va mi elemento apolleta que lo recibiremos con los parámetros para que ponga color y toda la volá
const Ampolleta = () =>{
  const [className, setClassState] = useState('yellow');
  const cambiarColor = () => {
    let cS = className;
    console.log(className);
    cS = cS.includes("red") ? "on" : "red";
    console.log(cS);
    setClassState(cS);
  };
  return(
    <>
      <div onClick={cambiarColor} className={className+" red "}></div>
      <div onClick={cambiarColor} className={className+" yellow "}></div>
      <div onClick={cambiarColor} className={className+" green "}></div>
    </>
  );
}


function App() {

  return (
    <>
      <div className='poste mx-auto'></div>
      <div className='container py-3'>
        <Ampolleta/>
        {/* <Ampolleta className={"yellow"}/>
        <Ampolleta className={"green"}/> */}
      </div>
    </>
  );
}

export default App;
