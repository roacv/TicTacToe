import './App.css';
import { useState } from 'react';

const Ampolleta = () =>{
  const [color, setColortate] = useState('red');
  const cambiarColor = (activar) => {
    // console.log(activar);
    // console.log(color)
    setColortate(activar);
  };
  return(
    <>
      <div className={"red "+(color==="red" ? "on" : "")} onClick={()=>cambiarColor('red')} ></div>
      <div className={"yellow "+(color==="yellow" ? "on" : "")} onClick={()=>cambiarColor('yellow')} ></div>
      <div className={"green " +(color==="green" ? "on" : "")} onClick={()=>cambiarColor('green')} ></div>
    </>
  );
}

function App() {

  return (
    <>
      <div className='poste mx-auto'></div>
      <div className='container py-3'>
        <Ampolleta />
      </div>
    </>
  );
}

export default App;
