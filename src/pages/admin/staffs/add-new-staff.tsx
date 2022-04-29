import axios from "axios"
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"

const AddNewStaff = () => {
  const router = useRouter()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [status, setStatus] = useState("")

  const [isSubmit, setIsSubmit] = useState(false)
  const [errors, setErrors] = useState<object>({})

  const validate = () => {
    let errors = {}
  }

  const createStaff = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/admin/register",
        {
          firstName,
          lastName,
          userName,
          emailAddress,
          password,
          role,
          contactNumber,
          status,
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    let errors = validate()

    // if (Object.keys(errors).length) return setErrors(errors)

    setIsSubmit(true)
    await createStaff()

    await router.push("/admin/staffs")
  }

  return (
    <div>
      <h3>AddNewStaff</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          name="userName"
          placeholder="user name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          name="emailAddress"
          placeholder="email address"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          name="role"
          placeholder="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          type="number"
          name="contactNumber"
          placeholder="contact number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />

        <input
          type="text"
          name="status"
          placeholder="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button type="submit">Add New Staff</button>
      </form>
    </div>
  )
}

export default AddNewStaff
