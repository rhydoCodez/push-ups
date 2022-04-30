import { useState } from "react"
import { Footer, Header } from "@/src/components"
import { Sidebar, Search, Pagination } from "@/src/components/utilities"
import { GetServerSideProps } from "next"
import axios from "axios"
import { BiEdit } from "react-icons/bi"
import { VscTrash } from "react-icons/vsc"
import { IoMdAdd } from "react-icons/io"
import Link from "next/link"
import { connectDB } from "@/src/utils"
import Student from "@/src/models/student"
connectDB()

interface IStudent {
  emailAddress: string
  firstName: string
  lastName: string
  department: string
}

const Students = ({ students }: { students: IStudent[] }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [studentsPerPage, setStudentsPerPage] = useState(10)

  // Get current students
  const indexOfLastStudent = currentPage * studentsPerPage
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  )

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

  // handle delete student
  const handleDelete = () => {
    alert("Are you sure you want to delete this Student?")
  }

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
          <div className="flex items-center justify-center w-full">
            <Search searchQuery="" />
          </div>
          <div>
            {/* students list */}
            <div className="mt-10">
              <table className="general__table">
                <thead>
                  <tr>
                    <th>Student&apos;s Name</th>
                    <th>Department</th>
                    <th>Email Address</th>
                    <th></th>
                  </tr>
                </thead>
                {students.length !== 0
                  ? currentStudents.map((student, index) => (
                      <tbody key={index}>
                        <tr>
                          <td>
                            {student.lastName} {student.firstName}
                          </td>
                          <td>{student.department}</td>
                          <td>{student.emailAddress}</td>
                          <td className="flex items-center space-x-6">
                            <Link href="/admin/students/profile/edit-profile">
                              <a>
                                <BiEdit className="w-6 h-6" />
                              </a>
                            </Link>
                            {/* <ConfirmDeleteStudent /> */}
                            <VscTrash
                              className="w-6 h-6"
                              onClick={handleDelete}
                            />
                          </td>
                        </tr>
                      </tbody>
                    ))
                  : "Loading"}
              </table>
            </div>
          </div>

          {/* pagination */}
          <div className="w-full flex items-center justify-center">
            <div className="mt-10 w-[500px]">
              <Pagination
                dataPerPage={studentsPerPage}
                total={students.length}
                paginateFront={paginateFront}
                paginateBack={paginateBack}
                currentPage={currentPage}
              />
            </div>
          </div>

          {/* add new Student */}
          <div className="w-full flex items-center justify-center my-5">
            <Link href="/admin/students/add-new-student">
              <a className="bg-gradient-to-tr from-genius-darkBlue to-genius-darkRed p-2 rounded-full max-w-fit">
                <IoMdAdd className="text-white h-8 w-8 font-bold" />
              </a>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Students

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await Student.find({})
  const allStudents = await JSON.parse(JSON.stringify(res))
  

  return {
    props: {
      students: allStudents,
    },
  }
}
