import logo from '../assets/logo.svg'; // Tell webpack this JS file uses this image

function Score({score}) {

    return (
        <div className="score-banner">
            <img src={logo} alt="Rock Paper Scissors"/>
            <div className="score-tracker">
                Score
                <div className="score-value">{score}</div>
            </div>
        </div>
    )
}

export default Score
