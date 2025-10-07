import { useState } from "react"

import QUESTIONS from "../questions"

export default function Quiz() {

    const [userAnswers, setAnswers] = useState([])
    
    const activeQuestionIndex = userAnswers.length

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5)
    
    function handleSelectAnswer(selectedAnswer) {
        setAnswers(prevAns => {
            return [...prevAns, selectedAnswer]
        })
    }

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