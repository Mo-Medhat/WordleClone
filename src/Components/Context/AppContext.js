import React, { createContext, useEffect, useState } from "react";
import { boardDefault, generateWord } from "./../Words/Words";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  
  useEffect(() => {
    generateWord().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord)
    });
  }, []);

  function selectedLetter(keyVal) {
    if (currAttempt.letterPos === 5) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  }

  function enterLetter() {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word Not Found");
    }
    if (currWord.toUpperCase() === correctWord.toUpperCase()) {
      setGameOver({
        gameOver: true,
        guessedWord: true,
      })
      return;
    }
    if (currAttempt.attempt === 5) {
      setGameOver({
        gameOver: true,
        guessedWord: false,
      })
    }
  }

  function deleteLetter() {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  }

  return (
    <AppContext.Provider
      value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        deleteLetter,
        enterLetter,
        selectedLetter,
        correctWord,
        disabledLetters,
        setDisabledLetters,
        gameOver,
        setGameOver,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
