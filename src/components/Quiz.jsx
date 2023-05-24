import React,{useEffect, useState} from "react";
import {decode} from 'html-entities';
import './quiz.css'
import Answers from "./Answers";
function Quiz(props){
  const[answersData,setAnswersData]=useState(()=>[])
  useEffect(()=>{
    setAnswersData([...props.answers])
  },[props.quizData])
 
   const[checker,setChecker]=useState(()=>false)
    const [canCheck,setCanCheck]=useState(()=>true)

    useEffect(()=>{
      if(answersData &&canCheck==true && checker==true){
          props.setAllIsClicked(prev=>prev + 1)
        setCanCheck(false)
      }
      
    },[answersData])
   useEffect(()=>{
  
      if(answersData && props.victory){
    answersData.map(x=>x.clicked && x.correct ? props.setCorrectPicked(prev=> prev+1) :"" )
       }
         },[props.victory])
  function isClicked(id){
    setAnswersData(prev=>{
     return prev.map(x=>{
       return x.id===id ? {...x, clicked:true} : {...x, clicked:false}
     })
    })
 
     return setChecker(true)
    }
   
 const answerMapper=(answersData.map(y=>{
 return( <Answers 
 key={y.id}
  {...y}
  checker={checker}
 isClicked={isClicked}
 victory={props.victory}
setCorrectPicked={props.setCorrectPicked}
 />)

 }))
return(
    <div className="quiz-parent">
        <h2 className="question-text">{decode(props.question)}  </h2>
      <div className="answers">
      {answerMapper}
      </div>
    
    </div>
)
}
export default Quiz;