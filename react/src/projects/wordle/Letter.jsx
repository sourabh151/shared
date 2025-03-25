import React from 'react'
import { useGlobalContext } from './App'


function Letter({ cell, character }) {
  let selected = {};
  let currentRow = Math.floor(cell / 5);
  const { currentCell, setCurrentCell, submit, currentWord } = useGlobalContext();
  const letterHandler = (e) => {
    if (Math.floor(currentCell / 5) === currentRow)
      setCurrentCell(cell);
  }
  if (currentCell === cell) {
    selected.border = " 1px solid white";
    selected.boxShadow = "0rem 0rem 0.3rem 0.3rem red";
  }
  if (currentRow <= submit) {
    if (currentWord.includes(character.toUpperCase())) {
      selected.backgroundColor = "orange";
    }
    if (currentWord[cell - (currentRow * 5)] === character.toUpperCase()) {
      selected.backgroundColor = "green";
    }
  }
  return (
    <p onClick={(e) => letterHandler(e)} style={selected}>{character}</p>
  )
}

export default Letter
