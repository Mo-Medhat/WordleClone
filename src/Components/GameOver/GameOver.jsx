import React, { useContext } from "react";
import { AppContext } from './../Context/AppContext';

function GameOver() {
  const { gameOver, currAttempt, correctWord } = useContext(AppContext);

  return (
    <div className="text-center">
      <h2>{gameOver.guessedWord ? "You Correctly Guessed" : "You Failed"}</h2>
      <h1>Correct: {correctWord.toUpperCase()}</h1>
      {gameOver.guessedWord && (
        <h3>You gussed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;
