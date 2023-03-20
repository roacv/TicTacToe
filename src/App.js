import './App.css';
import { useState } from 'react';
import Choose from './choose';
import Tablero from './tablero';

function App() {
  const [weapon, SetWeapon] = useState("");
  const [message, SetMessage] = useState("Pick a weapon");
  const handleClick = (e) => {
    var v_weapon = "";
    if (weapon==""){
      v_weapon=e.target.value;
      SetWeapon(e.target.value);
    }else {
      if (e.target.value==""){
        if (weapon=="X"){
          SetWeapon("O");
          v_weapon = "O";
          e.target.value="X";
          document.getElementById(e.target.id).innerHTML="X";
        } else {
          SetWeapon("X");
          e.target.value="O";
          v_weapon= "X";
          document.getElementById(e.target.id).innerHTML="O";
        }
      }else{
        v_weapon=weapon;
      }
    }
    SetMessage("It is "+v_weapon+" Turn");
   };
  return (
    <>
      <div className='mesa'>
        <h1 className='text-center text-white fw-bold'>Tic Tac Toe in React.js</h1>
        <h2 className='text-center text-white'> {message}</h2>
        <Choose weapon={weapon} handleClick={handleClick}/>
        {weapon !== "" &&
          <Tablero weapon={weapon} handleClick={handleClick}/>
        }
      </div>
    </>
  );
}

export default App;
