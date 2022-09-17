import React,{useEffect} from "react";
import '../App.css'
function StarterPage(props){



return(
<div className= {props.gameBegin ? "not-displayed" : "starterParent"}>
   
    <h1 className="quiz-title">Quizzical</h1>
    <h2 className="quiz-subtitle">Quiz game from a random game API</h2>
    <button onClick={props.startGame}className="home-button">Start</button>

    
</div>
)


}

export default StarterPage;