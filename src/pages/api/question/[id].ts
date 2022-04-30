import { NextApiRequest, NextApiResponse } from "next"
import Question from "@/src/models/question"
import { connectDB } from "@/src/utils"

const handleQuestionById = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    query: { id },
    method,
    body,
  } = req

  switch (method) {
    case "GET":
      try {
        const question = await Question.findById(id)

        if (!question) {
          return res
            .status(404)
            .json({ message: "Question does not exist!..." })
        }

        return res.status(200).json(question)
      } catch (err: any) {
        return res.status(400).json({ message: err.message })
      }

    case "DELETE":
      try {
        const deletedQuestion = await Question.findByIdAndDelete(id)
        if (!deletedQuestion) {
          return res
            .status(404)
            .json({ message: "Question does not exist!..." })
        }

        return res.status(200).json({ message: "deleted successfully" })
      } catch (err: any) {
        return res.status(400).json({ message: err.message })
      }

    case "PUT":
      try {
        const updatedQuestion = await Question.findByIdAndUpdate(id, body)

        if (!updatedQuestion) {
          return res.status(400).json({ message: "Question does not exist" })
        }

        return res
          .status(200)
          .json({ message: "Question updated Successfully" })
      } catch (err: any) {
        return res.status(400).json({ message: err.message })
      }

    default:
      return res.status(400).json({ message: "Unauthorized Access"  })
  }
}
