import rock from '../assets/rock.svg';
import paper from '../assets/paper.svg';
import scissors from '../assets/scissors.svg';
import {ROCK, PAPER, SCISSORS} from '../gameOptions';

function Game({handleClick}) {
    return (
        <div className="game-board">
            <div className="row">
                <div className="option rock" onClick={()=>handleClick(ROCK)}></div>
                <div className="option paper" onClick={()=>handleClick(PAPER)}></div>
            </div>
            <div className="row">
                <div className="option scissors" onClick={()=>handleClick(SCISSORS)}></div>
            </div>
        </div>
    )
}

export default Game
