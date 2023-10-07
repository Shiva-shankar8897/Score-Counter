import React from 'react'
import { useState } from 'react'
import './Cricket.css'

function Cricket() {
    const [score,setscore]=useState(0);
    const [wickets,setwickets]=useState(0);
    const handleScore=(event) =>{
        setscore(score+Number(event.target.value))
      }
      function handlewickets(){
        if(wickets <10){
          setwickets(wickets+1)
        }else{
          alert("Innings Over")
        }
      }
  return (
    <div>
      <h1 id="h1">Cricket Score</h1>
      <h2>IND - {score}/{wickets}</h2>
      <button id="btn1" value={0} onClick={handleScore}> 0 Run</button>
      <button id="btn2" value={1} onClick={handleScore}> 1 Run</button>
      <button id="btn3" value={2} onClick={handleScore}> 2 Run</button>
      <button id="btn4" value={3} onClick={handleScore}> 3 Run</button>
      <button id="btn5" value={4} onClick={handleScore}> 4 Run</button>
      <button id="btn6" value={5} onClick={handleScore}> Wd+4 Run</button>
      <button id="btn7" value={6} onClick={handleScore}> 6 Run</button>
      <button id="btn8"  onClick={handlewickets}> Wickets</button>
    </div>
  )
}

export default Cricket
