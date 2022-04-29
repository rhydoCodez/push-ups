import { useState } from "react"
import { Footer, Header } from "@/src/components"
import { Pagination, Sidebar } from "@/src/components/utilities"
import { IoMdAdd } from "react-icons/io"
import Link from "next/link"
import { GetServerSideProps } from "next"
import { connectDB } from "@/src/utils"
import Question from "@/src/models/question"
import axios from "axios"

interface IQuestions {
  _id: string
  examType: string
  subject: string
  question: string
  correctAnswer: string
  incorrectAnswers: string[]
  createdAt?: string
  updatedAt?: string
  __v?: number
}
const Questions = ({ questions }: { questions: IQuestions[] }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [questionsPerPage, setQuestionsPerPage] = useState(10)

  // Get current students
  const indexOfLastStudent = currentPage * questionsPerPage
  const indexOfFirstStudent = indexOfLastStudent - questionsPerPage
  const currentQuestions = questions.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  )

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

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
          {/* search box */}
          <div>
            {/* questions */}
            <div className="questions__list">
              <table className="general__table">
                <thead>
                  <tr>
                    <th>Exam Type</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {currentQuestions.map((question, index) => (
                    <tr key={index}>
                      <td>{question.examType}</td>
                      <td>{question.subject}</td>
                      <td>Dunno</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* pagination */}
          <div className="w-full flex items-center justify-center">
            <div className="mt-10 w-[500px]">
              <Pagination
                dataPerPage={questionsPerPage}
                total={questions.length}
                paginateFront={paginateFront}
                paginateBack={paginateBack}
                currentPage={currentPage}
              />
            </div>
          </div>

          {/* add new Question */}
          <div className="w-full flex items-center justify-center my-5">
            <Link href="/admin/questions/add-new-question">
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

export default Questions

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/question")
  
  const allQuestions = res.data.questions

  return {
    props: {
      questions: allQuestions
    }
  }
}
