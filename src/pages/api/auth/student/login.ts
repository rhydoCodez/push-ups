import { NextApiRequest, NextApiResponse } from "next"
import Logging from "@/src/utils/log/Logging"
import { connectDB } from "@/src/utils"
import Student from "@/src/models/student"
import argon from "argon2"
import jwt from "jsonwebtoken"
import { serialize } from "cookie"

connectDB()

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  const { emailAddress, password } = req.body

  switch (method) {
    case "POST":
      try {
        const studentExists = await Student.findOne({
          emailAddress,
        })

        if (!studentExists) {
          return res.status(400).json({ message: "Student does not exist" })
        }

        const isPasswordCorrect = await argon.verify(
          studentExists.password,
          password
        )

        if (!isPasswordCorrect) {
          return res.status(401).json({ message: "Invalid Credentials!" })
        }

        // after all credentials are confirmed -- to be correct.
        const token = jwt.sign({ id: studentExists._id }, JWT_SECRET_KEY, {
          expiresIn: Math.floor(Date.now() / 1000) * 60 * 60 * 24 * 30,
        })

        const serialized = serialize("firstGeniusJWT", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          maxAge: 60 * 60 * 24 * 30,
          path: "/",
        })

        res.setHeader("Set-Cookie", serialized)

        return res
          .status(200)
          .json({ message: "Logged In Successfully.", studentExists, token })
      } catch (err: any) {
        Logging.error(err.message)
        return res.status(400).json({ message: err.message })
      }

    default:
      return res.status(400).json({ message: "Unauthorized Access" })
  }
}

export default login
