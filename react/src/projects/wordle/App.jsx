import data from "./words.js"
import Words from './Words.jsx'
import KeyRow from "./KeyRow.jsx"
import "./index.css"
import { createContext, useContext, useEffect, useState } from "react";
import Banner from "./Banner.jsx";

const { words, rows } = data;
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
function App() {
  const [currentCell, setCurrentCell] = useState(0)
  const [currentWord, setCurrentWord] = useState(null);
  const [submit, setSubmit] = useState(-1);
  const [gameState, setGameState] = useState(0);
  const [wordList, setWordList] = useState([])

  useEffect(() => {
    let word = words[Math.floor(Math.random() * words.length)];
    word = word.toUpperCase();
    console.log(word)
    setCurrentWord(word);
    setWordList([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ]);
    setSubmit(-1);
    setCurrentCell(0);
  }, [gameState])

  return (
    <GlobalContext.Provider value={{ wordList, setWordList, currentCell, setCurrentCell, currentWord, submit, setSubmit, gameState, setGameState }}>
      <main className='game-box'>
        <section className='word-list'>
          {
            wordList.map((singleWord, i) => {
              return <Words singleWord={singleWord} key={i} rowIndex={i} />
            })
          }
        </section>
        <section className='key-board'>
          {rows.map((row, i) => {
            return <KeyRow keys={row} key={i} />
          })}
        </section>
        <Banner />
      </main>
    </GlobalContext.Provider>
  )
}

export default App
