import React, { useCallback, useContext, useEffect } from 'react'
import GameOver from '../GameOver/GameOver';
import Key from '../Key/Key';
import { AppContext } from './../Context/AppContext';

function Keboard() {

  const {enterLetter ,deleteLetter, selectedLetter, disabledLetters, gameOver } = useContext(AppContext);
  
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((e) => {
    if (e.key === "Enter") {
      enterLetter()
    }else if (e.key === "Backspace") {      
      deleteLetter()
    }else{
      keys1.forEach((key) => {
        if (e.key.toUpperCase() === key) {
          selectedLetter(key)
        }
      })
      keys2.forEach((key) => {
        if (e.key.toUpperCase() === key) {
          selectedLetter(key)
        }
      })
      keys3.forEach((key) => {
        if (e.key.toUpperCase() === key) {
          selectedLetter(key)
        }
      })
    }
  })
  

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard)
  
    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    }
  }, [handleKeyboard])
  

  return <>
    {gameOver.gameOver? <GameOver/> : <>
    <div className='keyboard' onKeyDown={handleKeyboard}>
    <div className="line line1">{keys1.map((key1, idx) => <Key keyVal={key1} idx={idx} disabled={disabledLetters.includes(key1)}/> )}</div>
    <div className="line line2">{keys2.map((key2, idx) => <Key keyVal={key2} idx={idx} disabled={disabledLetters.includes(key2)}/> )}</div>
    <div className="line line3">
      <Key keyVal={"Enter"} bigKey/>
      {keys3.map((key3, idx) => <Key keyVal={key3} idx={idx} disabled={disabledLetters.includes(key3)}/> )}
      <Key keyVal={"Delete"} bigKey/>
      </div>
    </div>
  </>}
  </>
}

export default Keboard