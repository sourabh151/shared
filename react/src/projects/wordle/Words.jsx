import { useEffect } from "react";
import { useGlobalContext } from "./App";
import Word from "./Letter.jsx"
function Words({ singleWord, rowIndex }) {
  const { gameState, submit, currentWord, setGameState } = useGlobalContext();
  let touchable = {};
  if (gameState > 0) {
    touchable.pointerEvents = "none";
  }
  useEffect(() => {
    if (submit === rowIndex) {
      if (singleWord.every((character, i) => {
        return character === currentWord[i];
      })) {
        setGameState(1);
      }
      else {
        if (submit === 4) {
          setGameState(2)
        }
      }
    }
  }, [submit, currentWord, rowIndex, setGameState, singleWord])
  return (
    <div style={touchable}>
      {
        singleWord.map((l, i) => {
          let c = i + (rowIndex * 5);
          return <Word key={c} cell={c} character={l} />
        })
      }
    </div>
  )
}

export default Words
