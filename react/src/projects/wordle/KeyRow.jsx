import { useGlobalContext } from './App';
function KeyRow({ keys }) {
  const { currentCell, setCurrentCell, wordList, setWordList, currentWord, setSubmit, gameState, setGameState } = useGlobalContext();
  let touchable = {};

  if (gameState > 0) {
    touchable.pointerEvents = "none";
  }

  const keyHandler = (e) => {
    if (e.target.innerText === "SUBMIT") {
      for (let c of wordList[Math.floor(currentCell / 5)]) {
        if (!c) {
          return;
        }
      }
      setSubmit(Math.floor(currentCell / 5));
      setCurrentCell((Math.floor(currentCell / 5) + 1) * 5)
    }
    else {
      let newWordList = wordList.map((r, i) => {
        return r.map((v, j) => {
          if (((i * 5) + j) === currentCell) {
            return e.target.innerText;
          }
          else {
            return v;
          }
        })
      })
      let boundary = ((Math.floor(currentCell / 5) + 1) * 5) - 1;
      if (currentCell < boundary) {
        setCurrentCell(currentCell + 1)
      }
      setWordList(newWordList)
    }
  }

  return (
    <div style={touchable}>
      {
        keys.map((alphabet) => {
          return <i key={alphabet} onClick={(e) => keyHandler(e)} >{alphabet}</i>
        })
      }
    </div>
  )
}

export default KeyRow
