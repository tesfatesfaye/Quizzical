



  for(let i=0;i<info.length;i++){
    quizHolder[i]=({id: nanoid(), value: info[i].question,answers:[]})
       for(let j=0;j<info[i].incorrect_answers.length;j++){
      quizHolder[i].answers[j]=({id:nanoid(), value:info[i].incorrect_answers[j],
      correct: false, clicked: false
      })
    }
    const placer= Math.floor(Math.random()* (info[i].incorrect_answers.length+1))
    quizHolder[i].answers.splice(placer,0, {id:nanoid(), value:info[i].correct_answer, correct:true, clicked:false })
  }

