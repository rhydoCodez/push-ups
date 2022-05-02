import { MouseEvent, useState } from "react"
import { NewQuestionCard } from "@/src/components"
import Question from "@/src/models/question"
import { connectDB } from "@/src/utils"
import Image from "next/image"

const TOTAL_QUESTIONS = 60

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Question = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export type QuestionState = Question & { answers: string[] }

export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5)

const fetchExamQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  // const endpoint = "http://localhost:3000/api/question/Literature"
  const data = await (await fetch(endpoint)).json()
  //  JSON.parse(JSON.stringify(data))
  // await connectDB()
  // const data = await Question.find({})

  console.log(data)
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }))
}

const StartExam = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState<number>(0)
  const [examOver, setExamOver] = useState(true)

  const startExam = async () => {
    // on click - fetch questions
    setLoading(true)
    setExamOver(false)

    const newQuestions = await fetchExamQuestions(
      TOTAL_QUESTIONS,
      Difficulty.HARD
    )

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    if (!examOver) {
      // Users answer
      const answer = e.currentTarget.value
      // Check answer against correct answer.
      const correct = questions[number].correct_answer === answer

      // Add score if answer is correct
      // you can modify marks here...
      if (correct) setScore((prev) => prev + 1)

      // save answer in the array for User answers

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }

      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    // go to next question if not already on the last one.
    const nextQuestion = number + 1

    if (nextQuestion === TOTAL_QUESTIONS) {
      setExamOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-200 p-10 font-poppins">
      <div>
        {examOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <div className="w-screen h-screen flex items-center justify-center">
            <button
              onClick={startExam}
              className="bg-gradient-to-r from-genius-darkBlue to-genius-darkRed py-3 px-10 text-3xl rounded-md text-gray-50 font-semibold"
            >
              Start
            </button>
          </div>
        ) : null}

        {/* show Score */}
        {!examOver ? <p>Score : {score}</p> : null}

        {loading && <p>Loading Questions...</p>}
      </div>
      <div>
        {!loading && !examOver && (
          <div>
            <div className="relative w-full flex items-center justify-center">
              <Image src="/assets/logo.png" alt="" width={80} height={80} />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <h3 className="text-genius-blue font-medium text-4xl">Welcome</h3>
              <h4 className="bg-genius-yellow px-10 py-3 w-fit text-center text-genius-gray font-medium tracking-wider">
                Adepoju Olamilekan
              </h4>
              {/* <h5>Examination Details</h5>
              <h4>Subject : English Language</h4>
              <h4>Duration: 2 hours</h4> */}
              {/* <p>
                Do ensure to pick the right answers and be time conscious for a
                successful completion of this exam, Good luck.
              </p>
              <p>Note: The questions below are strictly for practice.</p> */}
            </div>
            <NewQuestionCard
              questionNumber={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          </div>
        )}
      </div>
      {!examOver && !loading && userAnswers.length !== TOTAL_QUESTIONS ? (
        <div className="flex w-full items-end justify-end">
          <button
            onClick={nextQuestion}
            className="text-right border-2 py-3 px-10 rounded-md bg-gradient-to-r from-genius-darkRed to-genius-darkBlue text-gray-50"
          >
            Next Question
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default StartExam
