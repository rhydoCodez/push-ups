import { FormEvent, useState } from "react"
import axios from "axios"
import { connectDB } from "@/src/utils"
import Question from "@/src/models/question"

connectDB()

const examTypes = ["JAMB/UTME", "ACADEMICS", "POST JAMB/UTME"]
const subjects = ["Mathematics", "English Language", "Physics", "Chemistry"]

const  AddNewQuestion = () => {
  const [question, setQuestion] = useState<string>("")
  const [examType, setExamType] = useState("")
  const [subject, setSubject] = useState<string>("")
  const [correctAnswer, setCorrectAnswer] = useState<string>("")
  const [incorrectAnswer1, setIncorrectAnswer1] = useState<string>()
  const [incorrectAnswer2, setIncorrectAnswer2] = useState<string>()
  const [incorrectAnswer3, setIncorrectAnswer3] = useState<string>()

  const [isSubmit, setIsSubmit] = useState(false)
  const [errors, setErrors] = useState<object>({})
  const [message, setMessage] = useState<any>(null)

  const validate = () => {
    let errors = {}
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    let errors = validate()

    setIsSubmit(true)
    await createQuestion()
  }

  const createQuestion = async () => {
    try {
      await connectDB()
      const res = await axios.post('http://localhost:3000/api/question', {examType, subject, question, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3}, {
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (res.status === 201) {
        setMessage("Question created Successfully")

        setExamType("")
        setSubject("")
        setQuestion("")
        setCorrectAnswer("")
        setIncorrectAnswer1("")
        setIncorrectAnswer2("")
        setIncorrectAnswer3("")

        setTimeout(() => {
          setMessage("")
        }, 5000)
      }

      console.log(res)
      return res.data
    } catch (err: any) {
      console.log("Error adding question", err.message)
      setMessage('')
      return "Error adding Question"
    }
  }

  return (
    <div className="text-gray-900 flex items-center justify-center w-full flex-col space-y-5">
      <h3 className="text-genius-blue font-semibold text-2xl">
        Add New Question
      </h3>
      {message && (
        <p className="absolute top-16 right-16 bg-green-500 text-gray-50 font-semibold p-3 rounded-md">
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="w-[448px]">
        <div className="flex flex-col space-y-3 mb-5 w-full">
          <label htmlFor="examType">Exam Type</label>
          {/* <select
            className="outline-none border-2 bg-gray-50 p-2"
            name="examType"
            id="examType"
            value={examType}
            required
            onChange={(e) => setExamType(e.target.value)}
          >
            {examTypes.map((examType, index) => (
              <option value={examType} key={index}>
                {examType}
              </option>
            ))}
          </select> */}
          <input
            type="text"
            className="outline-none border-2 bg-gray-50 p-2"
            name="examType"
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-3 mb-5 w-full">
          <label htmlFor="subject">Subject</label>
          {/* <select
            className="outline-none border-2 bg-gray-50 p-2"
            name="subject"
            required
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            {subjects.map((subject, index) => (
              <option value={subject} key={index}>
                {subject}
              </option>
            ))}
          </select> */}

          <input
            type="text"
            className="outline-none border-2 bg-gray-50 p-2"
            value={subject}
            name="subject"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* <div>
          <label htmlFor="noOfQuestions">No. Of Questions</label>
          <input type="text" value={questions.length} />
        </div> */}

        {/* Enter New Question */}
        <div className="flex flex-col space-y-3 mb-5 w-full">
          <label htmlFor="newQuestion">Question</label>
          <textarea
            className="w-full min-h-[60px] p-3 outline-none border-2"
            value={question}
            required
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter Question here..."
          />
        </div>

        {/* options */}
        <div>
          <div className="flex flex-col space-y-3 mb-5 w-full">
            <label htmlFor="correctAnswer">Correct Answer</label>
            <input
              className="outline-none border-2 bg-gray-50 p-2"
              type="text"
              required
              id="correctAnswer"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-3 mb-5 w-full">
            <label htmlFor="incorrectAnswer">Incorrect Answer 1</label>
            <input
              className="outline-none border-2 bg-gray-50 p-2"
              type="text"
              id="option B"
              required
              value={incorrectAnswer1}
              onChange={(e) => setIncorrectAnswer1(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-3 mb-5 w-full">
            <label htmlFor="incorrectAnswer">Incorrect Answer 2</label>
            <input
              className="outline-none border-2 bg-gray-50 p-2"
              type="text"
              id="option C"
              required
              value={incorrectAnswer2}
              onChange={(e) => setIncorrectAnswer2(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-3 mb-5 w-full">
            <label htmlFor="incorrectAnswer">Incorrect Answer 3</label>
            <input
              className="outline-none border-2 bg-gray-50 p-2"
              type="text"
              id="option D"
              required
              value={incorrectAnswer3}
              onChange={(e) => setIncorrectAnswer3(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <button
            type="submit"
            className="bg-gradient-to-r from-genius-darkBlue to-genius-darkRed w-fit px-10 py-2 rounded-full text-gray-50 font-medium text-xl"
          >
            Add Question
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNewQuestion
