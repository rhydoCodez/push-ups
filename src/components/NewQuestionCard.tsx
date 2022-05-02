import { FC, MouseEvent } from "react"
import type { AnswerObject } from "@/src/pages/exam/start-exam/[subject]"

type Props = {
  question: string
  answers: string[]
  callback: (e: MouseEvent<HTMLButtonElement>) => void
  userAnswer: AnswerObject | undefined
  questionNumber: number
  totalQuestions: number
}

const options = ["a", "b", "c", "d"]

const NewQuestionCard: FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div className="w-[500px] my-5">
      <p>
        Question {questionNumber} / {totalQuestions}
      </p>

      <p dangerouslySetInnerHTML={{ __html: question }} />

      <div className="w-full">
        {answers.map((answer, index) => (
          <div key={index} className="w-full">
            {/* convert to boolean -- !! */}
            <button
              disabled={!!userAnswer}
              value={answer}
              onClick={callback}
              className="bg-genius-yellow my-1 text-gray-900 w-full py-1 text-left px-3 font-medium focus:text-gray-900 focus:border-2 focus:border-genius-yellow cursor-pointer"
            >
              <span
                dangerouslySetInnerHTML={{ __html: answer }}
                className="focus:text-gray-900 focus:border-2 focus:outline-genius-yellow cursor-pointer"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewQuestionCard
