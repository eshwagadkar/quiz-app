import { useState, useCallback } from 'react'
import quizCompleteImage from '../assets/quiz-complete.png'
import QUESTIONS from '../questions'
import Question from './Question'

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])
    
    const activeQuestionIndex = userAnswers.length
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers(prevAns => {
            return [...prevAns, selectedAnswer]
        })

    }, [])

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null)
    },[handleSelectAnswer])

    if(quizIsComplete){
        return (
            <div id='summary'>
                <img src={quizCompleteImage} alt='Trophy Icon'/>
                <h2>Quiz Completed</h2>
            </div>
        )
    }

    return <div id='quiz'>
        <Question key={activeQuestionIndex}
            questionIndex={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
        />
    </div>
}