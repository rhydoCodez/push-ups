import { NextApiRequest, NextApiResponse } from "next"
import { connectDB } from "@/src/utils"
import Student from "@/src/models/student"
import Logging from "@/src/utils/log/Logging"

connectDB()

const studentsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  const { firstName, lastName, emailAddress, department, password } = req.body

  switch (method) {
    case "GET":
      try {
        const students = await Student.find(
          {},
          { firstName: 1, lastName: 1, department: 1, emailAddress: 1 }
        ).sort({ lastName: 1 })

        return res.status(200).json({ message: "Successful", students })
      } catch (err: any) {
        Logging.error("Error fetching students")
        Logging.error(err.message)
        return res
          .status(400)
          .json({ message: "Error fetching Students", response: err.message })
      }

    case "POST":
      try {
        const student = new Student({
          firstName,
          lastName,
          emailAddress,
          department,
          password,
        })

        const userExists = await Student.findOne({ emailAddress: emailAddress })

        if (userExists) {
          // Bad Request - 400
          return res.status(400).json({ message: "User already Exists" })
        }

        await student.save()

        return res
          .status(201)
          .json({ message: "Student Created Successfully", student })
      } catch (err: any) {
        console.log("Error occured", err.message)
        return res
          .status(400)
          .json({ message: "Error creating Student", error: err.message })
      }
  }
}

export default studentsHandler
