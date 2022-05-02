import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import Logging from "@/src/utils/log/Logging"
import axios from "axios"

const StudentLoginForm = () => {
  const [studentEmail, setStudentEmail] = useState<string>("")
  const [studentPassword, setStudentPassword] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const router = useRouter()

  const handleStudentLogin = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/student/login",
        { emailAddress: studentEmail, password: studentPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      setMessage(res.data.message)
      router.push("/exam")
      console.log(res)
    } catch (err: any) {
      setMessage(err.response.data.message)
      setTimeout(() => {
        setMessage("")
      }, 5000)
      console.log(err.response.data.message)
    }
  }

  return (
    <div className="flex items-center justify-center flex-col space-y-6 h-screen w-full">
      <div className="relative w-[100] h-[100]">
        <Image src="/assets/logo.png" alt="" width={100} height={100} />
      </div>

      {/* error message */}
      {message && (
        <p className="absolute top-10 p-3 right-5 bg-red-800 text-gray-50">
          {message}
        </p>
      )}
      {/* error message ends */}
      <form
        className="userLogin__form pt-28 border border-gray-200"
        onSubmit={handleStudentLogin}
      >
        {/* email address */}
        <div className="relative">
          <input
            type="email"
            name="studentEmail"
            id="studentEmail"
            autoFocus={true}
            placeholder="Email Address"
            className="peer h-10 focus:outline-none outline-none border-b-2 border-gray-300 focus:border-blue-500 placeholder-transparent text-gray-600 w-[250px]"
            required
            aria-errormessage="Enter a valid Email Address"
            pattern="^\S+@\S+$"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
            htmlFor="studentEmail"
          >
            Email Address
          </label>
        </div>
        {/* password */}
        <div className="relative mt-6">
          <input
            type="password"
            name="studentPassword"
            className="peer h-10 focus:outline-none outline-none border-b-2 border-gray-300 focus:border-blue-500 placeholder-transparent text-gray-600 w-[250px]"
            required
            placeholder="Password"
            id="studentPassword"
            aria-errormessage="Enter Password"
            value={studentPassword}
            onChange={(e) => setStudentPassword(e.target.value)}
          />
          <label
            htmlFor="studentPassword"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
          >
            Password
          </label>
        </div>

        {/* login button */}
        <div>
          <button
            type="submit"
            className="w-full mt-6 hover:bg-opacity-90 transition-all duration-200 shadow-lg bg-blue-600 text-white py-2 font-[500] tracking-widest font-oswald"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default StudentLoginForm
