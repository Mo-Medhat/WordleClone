import axios from 'axios';
import wordBank from "../../wordle-bank.txt"

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]


export const generateWord = async () =>{
    let wordSet;
    let todaysWord;
    let {data} = await axios.get(wordBank)
    const wordArray = data.split("\n") 
    todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)]
    wordSet = new Set(wordArray)
    return {wordSet, todaysWord }
}