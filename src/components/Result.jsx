import { useEffect, useState } from 'react';
import {ROCK, PAPER, SCISSORS} from '../gameOptions';

function Result({chosenOption, resetGame, updateScore}) {

    const [gameScore, setGameScore] = useState(0);
    const [houseOption, setHouseOption] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setHouseOption(getRandomOption()), 500);
        return () => clearTimeout(timer);
    }, []);

    function getRandomOption () {
        const val = Math.ceil(Math.random()*3);
        switch (val){
            case 1: return ROCK;
            case 2: return PAPER;
            case 3: return SCISSORS;
        }
    }

    useEffect(()=>{
        setGameScore(getGameScore());
    },[houseOption]);

    useEffect(()=>{
        updateScore(gameScore);
    },[gameScore]);

    function getGameScore() {
        if(chosenOption==houseOption) return 0;
        if(chosenOption==ROCK && houseOption==SCISSORS) return 1;
        if(chosenOption==PAPER && houseOption==ROCK) return 1;
        if(chosenOption==SCISSORS && houseOption==PAPER) return 1;
        return -1;
    }

    function renderScore (score) {
        switch(score){
            case 1: return 'You won';
            case -1: return 'You lost';
            default: return 'It\'s a draw';
        }
    }

    return (
        <div className="game-result">
            <div className="row">
                <div className="game-player">
                    <p>You picked</p>
                    <div className={`option ${gameScore>0 && 'winner'} ${chosenOption}`}></div>
                </div>
                {houseOption && <div className="game-winner">
                    <p>{renderScore(gameScore)}</p>
                    <button onClick={()=>{resetGame()}}>Play again</button>
                </div>}
                <div className="game-house">
                    <p>The house picked</p>
                    {houseOption ? <div className={`option ${gameScore<0 && 'winner'} ${houseOption}`}></div> : <div className='option-placeholder'></div>}
                </div>
            </div>
        </div>
    )
}

export default Result;
