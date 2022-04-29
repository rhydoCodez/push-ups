import { useState } from "react"
import { Footer, Header } from "@/src/components"
import { Sidebar } from "@/src/components/utilities"

const EditStudentProfile = () => {
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [emailAddress, setEmailAddress] = useState<string>("")
  const [department, setDepartment] = useState<string>("")
  const [password, setPassword] = useState<string>("")

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
          <div className="w-full flex items-center justify-center flex-col">
            <h3 className="text-genius-blue font-semibold text-2xl mb-5">
              Edit Student Profile
            </h3>

            <form action="" className="w-[448px]">
              <div className="flex flex-col space-y-1 mb-3 w-full">
                <label htmlFor="examType">First Name</label>
                <input
                  type="text"
                  className="outline-none border-2 bg-gray-50 py-2 px-3"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="flex flex-col space-y-1 mb-3 w-full">
                <label htmlFor="examType">Last Name</label>
                <input
                  type="text"
                  className="outline-none border-2 bg-gray-50 py-2 px-3"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="flex flex-col space-y-1 mb-3 w-full">
                <label htmlFor="examType">Email Address</label>
                <input
                  type="text"
                  className="outline-none border-2 bg-gray-50 py-2 px-3"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>

              <div className="flex flex-col space-y-1 mb-3 w-full">
                <label htmlFor="examType">Department</label>
                <input
                  type="text"
                  className="outline-none border-2 bg-gray-50 py-2 px-3"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>

              <div className="flex flex-col space-y-1 mb-3 w-full">
                <label htmlFor="examType">Password</label>
                <input
                  type="text"
                  className="outline-none border-2 bg-gray-50 py-2 px-3"
                  value={emailAddress}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-center w-full">
                <button
                  type="submit"
                  //   onClick={handleAddNewQuestion}
                  className="bg-gradient-to-r from-genius-darkBlue to-genius-darkRed w-fit px-10 py-2 rounded-full text-gray-50 font-medium text-xl mt-3"
                >
                  Edit Profile
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

export default EditStudentProfile
