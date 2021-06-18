import React from 'react';
import { useState, useEffect } from 'react';
function ClickTac(props){
    
    const [squareType, setSquareType] = useState('')
    
    useEffect(() => {
        setSquareType('');
    },[props.reset])

    function clickHandler(){
        if(squareType === ''){
            setSquareType(props.clicked(props.x, props.y));
        }
    }

    return(
        <div className="square" onClick={clickHandler}>
            <p>{squareType}</p>
        </div>
    )
}

export default ClickTac;