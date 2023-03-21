import './App.css';
import { useState } from 'react';
import Choose from './choose';
import Tablero from './tablero';

function App() {
  const [weapon, SetWeapon] = useState("");
  const [message, SetMessage] = useState("Pick a weapon");
  const [moves, SetMoves] = useState(1);
  const reset =()=>{
    SetMoves(1);
    for (let i=1; i<=3; i++) {
      document.getElementById("a"+i).value="";
      document.getElementById("a"+i).innerHTML="";
      document.getElementById("b"+i).value="";
      document.getElementById("b"+i).innerHTML="";
      document.getElementById("c"+i).value="";
      document.getElementById("c"+i).innerHTML="";
    }
    SetMessage("It is "+weapon+" Turn");
  }
  const checkgame = (e) =>{
    var verifica = "";
    // en verifica guardamos la linea o diagonal a verificar por ganador
    // primeros las líneas verticales
    verifica = document.getElementById("a1").value+document.getElementById("b1").value+document.getElementById("c1").value;
    if (verifica === "XXX" || verifica === "OOO") {
      return true;
    } 
    verifica = document.getElementById("a2").value+document.getElementById("b2").value+document.getElementById("c2").value;
    if (verifica === "XXX" || verifica === "OOO") {
      return true;
    } 
    verifica = document.getElementById("a3").value+document.getElementById("b3").value+document.getElementById("c3").value;
    if (verifica === "XXX" || verifica === "OOO") {
      return true;
    } 
    // Ahora las horizontales
    verifica = document.getElementById("a1").value+document.getElementById("a2").value+document.getElementById("a3").value;
    if (verifica === "XXX" || verifica === "OOO") {
      return true;
    } 
    verifica = document.getElementById("b1").value+document.getElementById("b2").value+document.getElementById("b3").value;
    if (verifica === "XXX" || verifica === "OOO") {
      return true;
    } 
    verifica = document.getElementById("c1").value+document.getElementById("c2").value+document.getElementById("c3").value;
    if (verifica === "XXX" || verifica === "OOO") {
      return true;
    }
    // por último diagonales
    verifica = document.getElementById("a1").value+document.getElementById("b2").value+document.getElementById("c3").value;
    if (verifica === "XXX" || verifica === "OOO") {
      return true;
    } 
    verifica = document.getElementById("a3").value+document.getElementById("b2").value+document.getElementById("c1").value;
    if (verifica === "XXX" || verifica === "OOO") {
      return true;
    }
    // si no hay return arriba el juego continúa   
    return false;
  }
  const handleClick = (e) => {
    var v_weapon = "";
    var win = false;
    if (moves===10){
      return
    }
    if (weapon===""){
      v_weapon=e.target.value;
      SetWeapon(e.target.value);
    }else {
      SetMoves(moves+1);
      if (e.target.value===""){
        if (weapon==="X"){
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
    if (moves >= 5){
      //Acá reviso si hay ganadores (sabemos que eso ocurre luego de 5 movimientos)
      win=checkgame(e);
    }
    if (win){
      SetMessage(weapon+" WIN!");
      SetMoves(10);
    } else{
      if (moves===9){
        SetMessage("DRAW");
        SetMoves(10);
      }else {
        SetMessage("It is "+v_weapon+" Turn");
      }
    }
   };
  return (
    <>
      <div className='mesa text-center'>
        <h1 className='text-center text-white fw-bold'>Tic Tac Toe in React.js</h1>
        <h2 className='text-center text-white'> {message}</h2>
        <Choose weapon={weapon} handleClick={handleClick}/>
        {weapon !== "" &&
          <>
            <button className='reset btn btn-light' onClick={reset}>reset</button>
            <Tablero weapon={weapon} handleClick={handleClick}/>
          </>
        }
      </div>
    </>
  );
}

export default App;
