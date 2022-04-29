import React, { useState } from "react"
import { Footer, Header } from "@/src/components"
import {
  DepartmentCard,
  ExamCard,
  PerformanceCard,
  PerformanceChart,
  Sidebar,
} from "@/src/components/utilities"
import departments from "@/src/data/departments"
import exams from "@/src/data/exams"

const Dashboard = () => {
  const [totalNumberofRegisteredStudents, setTotalNumberOfRegisteredStudents] =
    useState<number>(120)
  const [numberOfExamsTaken, setNumberOfExamsTaken] = useState<number>(120)
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
        <section className=" w-full ml-10 main__content">
          <h3 className="bg-gradient-to-r from-genius-darkBlue to-genius-darkRed px-10 py-3 rounded-md w-max font-medium text-white">
            <span>Number of Registered Students</span>
            <span className="ml-6">{totalNumberofRegisteredStudents}</span>
          </h3>
          <div className="flex space-x-6 my-5 items-center">
            {departments.map((department, index) => (
              <div key={index}>
                <DepartmentCard
                  Icon={department.Icon}
                  department={department.name}
                  numberofRegisteredStudents={
                    department.numberofRegisteredStudents
                  }
                  progress={department.progress}
                />
              </div>
            ))}
          </div>
          <h3 className="bg-gradient-to-r from-genius-blue to-genius-darkBlue max-w-fit font-medium text-white px-10 py-3 rounded-md">
            <span>Number of Exams Taken</span>
            <span className="ml-6">{numberOfExamsTaken}</span>
          </h3>
          <div className="flex space-x-6 my-5 items-center">
            {exams.map((exam, index) => (
              <div key={index} className="">
                <ExamCard
                  examType={exam.examType}
                  numberOfExamsTaken={exam.numberOfExamsTaken}
                />
              </div>
            ))}
          </div>

          {/* graph */}
          <div className="mt-20 max-w-[900px]">
            <PerformanceChart />
          </div>
          {/* graph ends */}

          <div className="mt-20">
            <PerformanceCard />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
