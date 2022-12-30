import { useState } from 'react'
import './App.css'
import Score from './components/Score'
import Game from './components/Game'
import Result from './components/Result'
import Rules from './components/Rules'

function App() {
  const [score, setScore] = useState(0);
  const [chosenOption, setChosenOption] = useState(null);

  function resetGame (){
    setChosenOption(null);
  }

  function updateScore(gameScore){
    setScore(prev=>prev+gameScore);
  }

  return (
    <div className="App">
      <Score score={score}></Score>
      <div className="main">
        {chosenOption ? 
          <Result chosenOption={chosenOption} resetGame={resetGame} updateScore={updateScore}></Result> :
          <Game handleClick={setChosenOption}></Game>}
      </div>
      <Rules></Rules>
      <p>Challenge by <a href="https://www.frontendmentor.io" target="_blank">Front End Mentor</a> · Code by <a href="http://belencarrion.dev" target="_blank">Belen Carrion</a></p>
    </div>
  )
}

export default App
