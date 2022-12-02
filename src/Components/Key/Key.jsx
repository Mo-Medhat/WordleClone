import React, { useContext } from 'react'
import { AppContext } from './../Context/AppContext';

function Key({keyVal , idx , bigKey, disabled}) {

    const {enterLetter ,deleteLetter, currAttempt ,selectedLetter} = useContext(AppContext);


    function selectLetter() {
      if (keyVal === "Enter") {
        enterLetter()
      } else if (keyVal === "Delete") {
        deleteLetter()
      }else {
      if (currAttempt.letterPos > 4 ) return ;
      selectedLetter(keyVal)
    }
  };
  return <>
    <div onClick={selectLetter} key={idx} className='key' id= {bigKey ? "big" : disabled && "disabled"} >{keyVal}</div>
    
</>
}

export default Key