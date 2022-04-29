import { NextApiRequest, NextApiResponse } from "next"
import { connectDB } from "@/src/utils"
import Question from "@/src/models/question"

connectDB()

const questionsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { examType, question, correctAnswer, incorrectAnswers, subject } =
    req.body
  const { method } = req

  switch (method) {
    case "POST":
      try {
        const newQuestion = new Question({
          examType,
          question,
          correctAnswer,
          incorrectAnswers,
          subject,
        })

        await newQuestion.save()

        return res.status(201).json({ message: "Question added Successfully" })
      } catch (err: any) {
        return res.status(400).json({ message: "Error creating Question." })
      }

    case "GET":
      try {
        const questions = await Question.find({})
        
        return res
          .status(200)
          .json({ message: "Successfully fetched Questions", questions })
      } catch (err: any) {
        return res
          .status(404)
          .json({ message: "Error fetching Questions", error: err.message })
      }

    default:
      return res.status(400).json({ message: "Unauthorized Access" })
  }
}

export default questionsHandler
