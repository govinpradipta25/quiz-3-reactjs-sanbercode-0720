import React from 'react'
import {QuizProvider} from './QuizContext'
import Index from './Index'

const Quiz = () =>{
    return(
      <QuizProvider>
        <Index/>
      </QuizProvider>
    )
  }
  
  export default Quiz