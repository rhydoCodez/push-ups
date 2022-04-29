import { NextApiRequest, NextApiResponse } from "next"
import { connectDB } from "@/src/utils"
import Student from "@/src/models/student"

connectDB()

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, emailAddress, department, password } = req.body

  const { method } = req

  switch (method) {
    case "POST":
      try {
        const student = new Student({
          firstName,
          lastName,
          emailAddress,
          department,
          password,
        })

        const studentExists = await Student.findOne({ emailAddress: emailAddress })

        if (studentExists) {
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

export default register
