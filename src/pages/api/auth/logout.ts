import { NextApiRequest, NextApiResponse } from "next"
import { serialize } from "cookie"

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  const { cookies } = req

  const jwt = cookies.firstGeniusJWT

  if (!jwt) {
    return res
      .status(400)
      .json({ message: "Sorry! You're not Logged in Already!" })
  } else {
    const serialized = serialize("firstGeniusJWT", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    })

    res.setHeader("Set-Cookie", serialized)
    return res.status(200).json({ message: "Successfully Logged Out!" })
  }
}

export default logout
