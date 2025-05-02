const states = {
  X: 1,
  O: -1,
  D: 0,
  C: 100
}
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
function analyseBoard(pos: string[]): number {
  for (let i = 0; i < wins.length; i++) {
    const e = wins[i];
    if (pos[e[0]]) {
      if (pos[e[0]] === pos[e[1]] && pos[e[1]] === pos[e[2]]) {
        return pos[e[0]] === "X" ? states.X : states.O;
      }
    }
  }

  return !pos.some((v) => v === "") ? states.D : states.C;
}
/*
 * TODO: WHAT SHOULD BE THE RETURN VALUE OF MINIMAX FUNCTION
 */
function minimax(pos: string[],turn : number) :[number,number]{
  const analysis = analyseBoard(pos);
  
  if((analysis <= 1)){
    return [analysis,-1];
  }
  const empty:number[] = [];
  pos.forEach((v,i) => {
    if(v === "")
      empty.push(i)
  })
  // console.log(analysis,empty,turn);
  
  if(turn === states.X){
    let max = -Infinity;
    let maxPos = -1;
    for(const e of empty){
      const newPos = [...pos];
      newPos[e] = "X"
      // console.log(newPos);
      const r = minimax(newPos,states.O)
      if(r[0] > max){
        max = r[0]
        maxPos = e
      }
    }
    return [max,maxPos]
  }
  else{
    let min = Infinity;
    let minPos = -1;
    for(const e of empty){
      const newPos = [...pos];
      newPos[e] = "X"
      const r = minimax(newPos,states.X)
      if(r[0] < min){
        min = r[0]
        minPos = e
      }
    }
    return [min,minPos]
  }
}
const pos = [
  "X","","",
  "O","X","O",
  "X","O","O"
]
console.log(minimax(pos,states.O));

