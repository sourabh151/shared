import { useGlobalContext } from "./App"

function Banner() {
  const { gameState, setGameState } = useGlobalContext();
  let classList = "banner";
  //if(gameState > 0){
  //  classList += " backdrop-blur"
  //}
  return (
    <>
      {
        gameState > 0 &&
        <div className={classList}>
          {
            gameState === 1 ? <h3>You Win</h3> : <h3>You Lose</h3>
          }
          <button onClick={() => setGameState(0)}>Restart</button>
        </div>
      }
    </>
  )
}

export default Banner
