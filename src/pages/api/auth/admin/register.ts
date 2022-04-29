import { NextApiRequest, NextApiResponse } from "next"
import { connectDB } from "@/src/utils"
import Admin from "@/src/models/admin"

connectDB()

const registerAdmin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  const {
    firstName,
    lastName,
    userName,
    emailAddress,
    password,
    role,
    contactNumber,
    status,
  } = req.body

  switch (method) {
    case "POST":
      try {
        const admin = await Admin.create({
          firstName,
          lastName,
          userName,
          emailAddress,
          password,
          role,
          contactNumber,
          status,
        })

        await admin.save()
        res.status(200).json({ message: "Created Admin successfully", admin })
        return
      } catch (err: any) {
        console.log(err.message)
        res.status(400).json({ message: err.message })
        return
      }

    case "GET":
      try {
        const admins = await Admin.find({})

        return res
          .status(200)
          .json({ message: "Staffs found Successfully", admins })
      } catch (err: any) {
        console.log("error fetching staffs")
        return res.status(400).json({ message: err.message })
      }
  }
}

export default registerAdmin
