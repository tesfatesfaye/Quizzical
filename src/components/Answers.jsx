import React, { useEffect } from "react";
import './quiz.css'
function Answers(props){
   

    const styles=(()=>{
        
        if(props.victory==false){
            if(props.clicked===true){
             return {background: "#D6DBF5"}
            }
            else{
                return {background: ""}
            }
            
        }
        else{
            if(props.clicked===true){
                if(props.correct===true){
                    return {background:"#94D7A2"}
                } 
                
                else{
                    return{background:"#F8BCBC"}
                }
            }
            else{
                if(props.correct===true){
                    return {background:"#94D7A2"}
                }
                
            }
        }
        
        return {background:""}






      })
    
    
    return(
        <div style={(styles())}onClick={props.victory ?"" : ()=>props.isClicked(props.id)}className="answerDiv">
            {props.value}
        </div>
    )
}

export default Answers