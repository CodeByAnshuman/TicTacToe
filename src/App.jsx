import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  

  return (
     <main>
      <div id= "game-container">
        <ol id="players">
          <Player name= "Player 1" symbol = "X"></Player>
          <Player name= "Player 2" symbol = "O"></Player>

        </ol>
       <GameBoard />
      </div>
     </main>
  )
}

export default App
