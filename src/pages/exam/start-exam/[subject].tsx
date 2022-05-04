import { FormEvent, MouseEvent, useState } from "react"
import { NewQuestionCard } from "@/src/components"
import Question from "@/src/models/question"
import { GetStaticPaths, GetStaticProps } from "next"
import axios from "axios"
import { connectDB } from "@/src/utils"
import Image from "next/image"
import { FiCheckCircle } from "react-icons/fi"
import { MdOutlineLogout } from "react-icons/md"
import { useRouter } from "next/router"

const TOTAL_QUESTIONS = 60

const getCircularReplacer = () => {
  const seen = new WeakSet()
  return (key: any, value: any) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return
      }
      seen.add(value)
    }
    return value
  }
}

export type Question = {
  _id: string
  examType: string
  correctAnswer: string
  incorrectAnswers: string[]
  question: string
  subject: string
}

export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

export type QuestionState = Question & {
  answers: string[]
}

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5)

const ExamQuestions = ({ questions }: { questions: QuestionState[] }) => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  // const [allQuestions, setAllQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState<number>(0)
  const [examOver, setExamOver] = useState<boolean>(false)

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    if (!examOver) {
      // Users answer
      const answer = e.currentTarget.value
      // Check answer against correct answer.
      const correct = questions[number].correctAnswer === answer

      // Add score if answer is correct
      // you can modify marks here...
      if (correct) setScore((prev) => prev + 1)

      // save answer in the array for User answers

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correctAnswer,
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

  // logout api
  const handleLogout = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await axios.get("http://localhost:3000/api/auth/logout")
      router.push("/")
      return
    } catch (err: any) {
      return err.response.data.message
    }
  }

  return (
    <div className="px-10 py-5 bg-gray-200 h-screen w-screen font-poppins text-gray-900">
      {/* <p>{questions.length}</p> */}
      <div className="relative w-full flex items-center justify-center">
        <Image src="/assets/logo.png" alt="" width={80} height={80} />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <p className="py-3 px-10 font-semibold bg-genius-yellow text-gray-900 text-xl">
          {questions[number].examType}
        </p>
        <p className="my-2 font-semibold">{questions[number].subject}</p>
      </div>
      {!examOver && !loading && userAnswers.length !== TOTAL_QUESTIONS ? (
        <div>
          <NewQuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />

          <div className="flex w-full items-end justify-end">
            <button
              onClick={nextQuestion}
              className="text-right border-2 py-3 px-10 rounded-md bg-gradient-to-r from-genius-darkRed to-genius-darkBlue text-gray-50"
            >
              Next Question
            </button>
          </div>
        </div>
      ) : (
        <div className=" flex w-full flex-col items-center justify-center font-poppins my-5">
          <h3 className="text-genius-green text-5xl mb-5 font-bold">
            Well done!
          </h3>
          <h2>Your Score is {score}</h2>
          <FiCheckCircle className="w-40 h-40 text-genius-green" />
          {/* logout */}
          <button
            title="Logout"
            className="text-xl font-semibold bg-gradient-to-r from-genius-darkRed to-genius-darkBlue text-gray-50 px-20 py-3 rounded-md mt-5"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default ExamQuestions

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  await connectDB()
  const response = await axios.get(
    `http://localhost:3000/api/question/${params!.subject}`
  )

  return {
    props: {
      questions: JSON.parse(
        JSON.stringify(response.data, getCircularReplacer())
      ).map((question: Question) => ({
        ...question,
        answers: shuffleArray([
          ...question.incorrectAnswers,
          question.correctAnswer,
        ]),
      })),
    },
  }
}

// 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

export const getStaticPaths: GetStaticPaths = async (context) => {
  const response = await axios.get("http://localhost:3000/api/question")
  const paths = await response.data.questions.map((quest: any) => {
    return {
      params: {
        subject: JSON.stringify(quest.subject, getCircularReplacer()),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
