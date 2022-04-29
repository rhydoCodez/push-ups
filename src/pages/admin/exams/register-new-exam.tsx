import { useState } from "react"
import { Footer, Header } from "../../../components"
import { Sidebar } from "../../../components/utilities"

const examTypes = ["JAMB/UTME", "POST JAMB/UTME", "ACADEMICS"]
const subjects = [
  "Mathematics",
  "English",
  "Chemistry",
  "Physics",
  "Economics",
  "Islamic Religious Studies",
  "Geography",
  "Computer Science",
  "Biology",
]

const RegisterNewExam = () => {
  const [name, setName] = useState<string>("")
  const [department, setDepartment] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [examType, setExamType] = useState("")
  const [subject1, setSubject1] = useState<string>("")
  const [subject2, setSubject2] = useState<string>("")
  const [subject3, setSubject3] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  return (
    <div className="font-poppins">
      <Header />
      {/* dashboard */}
      <div className="flex p-10 bg-gray-50">
        <section>
          {/* dashoard sidebar */}
          <Sidebar />
        </section>
        {/* main content */}
        <section className="main__content w-full ml-10">
          <div className="flex items-center justify-center flex-col text-gray-800">
            <div>
              <h3 className="text-genius-blue font-semibold text-2xl text-center mb-5">
                Register New Exam
              </h3>
            </div>

            <form action="">
              <div className="general__input__container">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="general__input"
                  value={name}
                  placeholder="John doe"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="general__input__container">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  className="general__input"
                  value={department}
                  placeholder="Science"
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
              <div className="general__input__container">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="general__input"
                  value={email}
                  placeholder="johndoe@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* exam type */}
              <div className="genaral__input__container">
                <label htmlFor="examType">Examination Type</label>
                <select
                  name="examType"
                  className="general__input"
                  id="examType"
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}
                >
                  {examTypes.map((et, i) => (
                    <option value={et} key={i}>
                      {et}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="general__input__container">
                  <label htmlFor="subject1">Subjects 1</label>
                  <select
                    name="subject1"
                    className="general__input"
                    id="subject1"
                    value={subject1}
                    onChange={(e) => setSubject1(e.target.value)}
                  >
                    {subjects.map((sub, i) => (
                      <option key={i} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="general__input__container">
                  <label htmlFor="subject2">Subject 2</label>
                  <select
                    name="subject2"
                    className="general__input"
                    id="subject2"
                    value={subject2}
                    onChange={(e) => setSubject2(e.target.value)}
                  >
                    {subjects.map((sub, i) => (
                      <option key={i} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="general__input__container">
                  <label htmlFor="subject3">Subject 3</label>
                  <select
                    name="subject3"
                    className="general__input"
                    id="subject3"
                    value={subject3}
                    onChange={(e) => setSubject3(e.target.value)}
                  >
                    {subjects.map((sub, i) => (
                      <option key={i} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="general__input__container">
                  <label htmlFor="subject">Subject </label>
                  <select
                    name="subject"
                    className="general__input w-full"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    {subjects.map((sub, i) => (
                      <option key={i} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-full flex items-center justify-center">
                <button
                  className="max-w-fit px-10 py-2 rounded-full bg-gradient-to-r from-genius-darkRed to-genius-darkBlue text-gray-50 font-semibold text-2xl
            "
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default RegisterNewExam
