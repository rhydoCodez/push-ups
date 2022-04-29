import { NextApiRequest, NextApiResponse } from "next"
import { connectDB } from "@/src/utils"
import Admin from "@/src/models/admin"
import argon from "argon2"
import jwt from "jsonwebtoken"

connectDB()

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string

const adminLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  const { userName, password } = req.body

  switch (method) {
    case "POST":
      try {
        const adminExists = await Admin.findOne({ userName: userName })

        if (!adminExists) {
          return res.status(400).json({ message: "Admin does not exist" })
        }

        const isPasswordCorrect = await argon.verify(
          password,
          adminExists.password
        )

        if (!isPasswordCorrect) {
          return res
            .status(400)
            .json({ message: "Invalid Username or Password" })
        }

        const token = jwt.sign({ id: adminExists._id }, JWT_SECRET_KEY, {
          expiresIn: "2hr",
        })

        return res
          .status(200)
          .json({ message: "Logged in Successfully", adminExists, token })
      } catch (err: any) {
        return res.status(400).json({ message: err.message })
      }

    default:
      return res.status(400).json({ message: "Unauthorized Access" })
  }
}

export default adminLogin
