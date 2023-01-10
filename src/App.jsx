import React, { useState, useEffect } from 'react'
import StarterPage from './components/StarterPage'
import Quiz from './components/Quiz'
import './App.css'
import {nanoid} from "nanoid"

function App() {
  
const [gameBegin, setGameBegin]=useState(false)
const[quizData,setQuizData]=useState(()=>[])
const[victory,setVictory]=useState(()=>false) //when a user submits their answer
const [correctPicked,setCorrectPicked]=useState(()=>0)
const[allIsClicked,setAllIsClicked]=useState(()=>0)
const [newGame,setNewGame]=useState(()=>false)


  useEffect(()=>{
      
    async function getQuiz(){
      let info=[]
      const res=await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    const data=await res.json()
   info=data.results
   
     let quizHolder=[]

     for(let i=0;i<info.length;i++){
      
      quizHolder[i]=({id: nanoid(), value: info[i].question,answers:[]})
         for(let j=0;j<info[i].incorrect_answers.length;j++){
        quizHolder[i].answers[j]=({id:nanoid(), value:decodeURI(info[i].incorrect_answers[j]),
        correct: false, clicked: false
        })
      }
      const placer= Math.floor(Math.random()* (info[i].incorrect_answers.length+1))
      quizHolder[i].answers.splice(placer,0, {id:nanoid(), value:info[i].correct_answer, correct:true, clicked:false })
    }
   
   

  setQuizData(quizHolder)




  }

  getQuiz()

      

  },[newGame])




 
 

 function submitAnswers(){
  if(allIsClicked===quizData.length){
    setVictory(true)
 
   
  }
  else{
    alert(`You have answered ${allIsClicked} out of ${quizData.length} questions. Please answer all of the questions.`)
    // will use custom hooks and context to check if all is clicked
  }
   
        
  
 }
function playAgain(){
  setVictory(false)
  setNewGame(prev=> !prev)
  setCorrectPicked(0)
  setAllIsClicked(0)
   
}

function startGame(){
 setGameBegin(true)
  }



const mapper=quizData.map(x=>{
  
  return(

    <Quiz
    key={x.id}
    gameBegin={gameBegin}
    id={x.id}
     answers={x.answers}
    question={x.value}
    setVictory={setVictory}
    victory={victory}
    setCorrectPicked={setCorrectPicked}
    allIsClicked={allIsClicked}
    setAllIsClicked={setAllIsClicked}

    
    />
  )
    
})

 

  return (
    <div className="App">
      <StarterPage
      gameBegin={gameBegin}
      startGame={startGame}
      />
    <div className={gameBegin ? 'quiz-GrandParent': "not-displayed"}>
    {mapper}
    </div>
    <div className='button-parent'>
      <h3 className={victory ? `score-Text`: `not-displayed`}>{`You scored ${correctPicked}/${quizData.length}  correct answers`}</h3>
      <button onClick={victory ? playAgain :submitAnswers}className={gameBegin ? 'submit-button':'not-displayed'}>{victory ? "Play again" : 'Check answers'}</button>

    </div>
    
    
   

    <div className='blueBack'></div>
    <div className='yellowBack'></div>
    </div>
  )
}

export default App
