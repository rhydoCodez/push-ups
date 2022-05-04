import { NextApiRequest, NextApiResponse } from "next"
import Question from "@/src/models/question"
import { connectDB } from "@/src/utils"

connectDB()

interface IMyQuery extends NextApiRequest {
  query: {
    [key: string]: string
  }
}

const handleQuestionById = async (req: IMyQuery, res: NextApiResponse) => {
  const { method, body } = req

  const { subject } = req.query

  switch (method) {
    case "GET":
      try {
        const subjectQuestions = await Question.find({
          subject: subject.split("-").join(" "),
        })

        if (!subjectQuestions) {
          return res
            .status(404)
            .json({ message: "No Questions for the specified Subject!..." })
        }

        return res.status(200).json(subjectQuestions)
      } catch (err: any) {
        return res.status(400).json({ message: err.message })
      }

    case "DELETE":
      try {
        const deletedQuestion = await Question.findByIdAndDelete(subject)

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
        const updatedQuestion = await Question.findByIdAndUpdate(subject, body)

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
      return res.status(400).json({ message: "Unauthorized Access" })
  }
}

export default handleQuestionById
