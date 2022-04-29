import axios from "axios"
import { useEffect, useState } from "react"
import OptionsCard from "./OptionsCard"

interface IQuestion {
  category?: string
  type?: string
  difficulty?: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

const options = ["a", "b", "three", "four"]

const QuestionCard = ({
  data: { question, correct_answer, answers },
}: {
  data: {
    question: string
    correct_answer: string
    answers: string[]
  }
}) => {
  return (
    <div className="max-w-md">
      <h3 dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer, index) => (
          <div key={index}>
            <p
              className="bg-genius-cream my-2 px-4 py-2 text-gray-900"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard
