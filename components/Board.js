import React from 'react';
import { useState } from 'react';
import '../static/style/main.css'
import ClickTac from './ClickTac'

function Board(){

    const [status, setStatus] = useState('Next player: X');
    const [gameState, setGameState] = useState([[],[],[]]);
    const [turnCount, setTurnCount] = useState(0);
    const [resetToken, setResetToken] = useState(0);

    function turnTaken(x, y){

        setTurnCount(turnCount + 1);

        let clickedSquare;

        if(status.includes('Winner')){
            return;
        }

        if (status === 'Next player: X') 
            {
                setStatus('Next player: O');
                clickedSquare = 'X';
            }
        else if (status === 'Next player: O') 
            {
                setStatus('Next player: X');
                clickedSquare = 'O';
            }
            
        const newGameState = [...gameState];
        newGameState[x-1][y-1] = clickedSquare;
        setGameState(newGameState);
        checkForWinner(clickedSquare);

        return clickedSquare;
    }

    function checkForWinner(clickedSquare){

        if(
            (gameState[0][0] && gameState[0][0] === gameState[1][1] &&  gameState[0][0] === gameState[2][2]) ||
            (gameState[2][0] && gameState[2][0] === gameState[1][1] &&  gameState[2][0] === gameState[0][2])       
        ){
            setStatus('Winner: ' + clickedSquare)
        }

        for(let i = 0; i < 3; i++)
            if(
                (gameState[i][0] && gameState[i][0] === gameState[i][1] &&  gameState[i][0] === gameState[i][2]) ||
                (gameState[0][i] && gameState[0][i] === gameState[1][i] &&  gameState[0][i] === gameState[2][i])
            ){
                setStatus('Winner: ' + clickedSquare)
            }

        if (turnCount === 8){
            setStatus('Tie');
        }
    }

    function reset(){
        setGameState([[],[],[]])
        setResetToken(!resetToken);
        setStatus('Next player: X');
        setTurnCount(0);
    }

    let gameArea = []        
    
    for (let i = 1; i < 4; i++){
        for (let j = 1; j < 4; j++){
            gameArea.push(<ClickTac x={i} y={j} key={''+ i + j} clicked={turnTaken} reset={resetToken}/>)
        }
    }
        
    return(
        <>
            <div className="status">
                {status}
            </div>
            <div className="board">
                {gameArea}
            </div>
            <button onClick={reset} className="reset">
                Reset
            </button>
        </>
    )
}

export default Board;