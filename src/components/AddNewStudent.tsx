import { FormEvent, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

const examTypes = ["JAMB/UTME", "ACADEMICS", "POST JAMB/UTME"]
const subjects = ["Mathematics", "English Language", "Physics", "Chemistry"]

const AddNewStudent = () => {
  const router = useRouter()
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [emailAddress, setEmailAddress] = useState<string>("")
  const [department, setDepartment] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [isSubmit, setIsSubmit] = useState(false)
  const [errors, setErrors] = useState<object>({})

  const createStudent = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/students",
        {
          firstName,
          lastName,
          emailAddress,
          department,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      res.data.headers["Content-Type"]
    } catch (err: any) {
      console.log(err.message)
    }
  }

  const validate = () => {
    let errors = {}
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    let errors = validate()

    // if (Object.keys(errors).length) return setErrors(errors)

    setIsSubmit(true)
    await createStudent()

    await router.push("/admin/students")
  }

  return (
    <div className="text-gray-900 flex items-center justify-center w-full flex-col space-y-5">
      <h3 className="text-genius-blue font-semibold text-2xl">
        Add New Student
      </h3>
      <form onSubmit={handleSubmit} className="w-[448px]">
        <div className="flex flex-col space-y-3 mb-5 w-full">
          <label htmlFor="examType">First Name</label>
          <input
            type="text"
            name="firstName"
            className="outline-none border-2 bg-gray-50 p-2"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-3 mb-5 w-full">
          <label htmlFor="examType">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="outline-none border-2 bg-gray-50 p-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-3 mb-5 w-full">
          <label htmlFor="examType">Email Address</label>
          <input
            type="text"
            name="emailAddress"
            className="outline-none border-2 bg-gray-50 p-2"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-3 mb-5 w-full">
          <label htmlFor="examType">Department</label>
          <input
            type="text"
            name="department"
            className="outline-none border-2 bg-gray-50 p-2"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-3 mb-5 w-full">
          <label htmlFor="examType">Password</label>
          <input
            type="text"
            className="outline-none border-2 bg-gray-50 p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center w-full">
          <button
            type="submit"
            className="bg-gradient-to-r from-genius-darkBlue to-genius-darkRed w-fit px-10 py-2 rounded-full text-gray-50 font-medium text-xl"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNewStudent
