import axios from "axios"
import React from "react"
// import questions from "@/src/data/questions"

const QuestionsList = () => {
  const fetchAllQuestions = async () => {}
  return (
    <div className="questions__list">
      <table>
        <thead>
          <tr>
            <th>Exam Type</th>
            <th>Subject</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {questions.map((question, index) => (
            <tr key={index}>
              <td>
                {question.examType} {question.examYear}
              </td>
              <td>{question.subject}</td>
              <td>Dunno</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  )
}

export default QuestionsList
