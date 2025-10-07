import { useState } from 'react'
import quizCompleteImage from '../assets/quiz-complete.png'
import QUESTIONS from '../questions'

export default function Quiz() {

    const [userAnswers, setAnswers] = useState([])
    
    const activeQuestionIndex = userAnswers.length
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length
    
    function handleSelectAnswer(selectedAnswer) {
        setAnswers(prevAns => {
            return [...prevAns, selectedAnswer]
        })
    }

    if(quizIsComplete){
        return (
            <div id="summary">
                <img src={quizCompleteImage} alt='Trophy Icon'/>
                <h2>Quiz Completed</h2>
            </div>
        )
    }
    
    // This below code will execute only if we have questions to display
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5)

    return <div id="quiz">
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                { shuffledAnswers.map(answer => (
                    <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
}