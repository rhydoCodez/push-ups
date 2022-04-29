import React from "react"
import { IconType } from "react-icons"
import { BsArrowDown } from "react-icons/bs"

interface IDepartmentCard {
  Icon: IconType
  department: string
  numberofRegisteredStudents: number
  progress?: boolean
}

const DepartmentCard = ({
  Icon,
  department,
  numberofRegisteredStudents,
  progress,
}: IDepartmentCard) => {
  return (
    <div className="bg-gray-100 rounded-lg px-5 py-3 border-2 border-gray-300 w-[250px] shadow-xl font-poppins">
      <div className="w-full flex items-center justify-center">
        <h3 className="text-sm max-w-[100px] text-center">{department}</h3>
      </div>
      <div className="flex items-center justify-between mt-1">
        <Icon className="w-10 h-10 text-gray-600" />
        <h4 className="text-genius-blue text-6xl font-extrabold">
          {numberofRegisteredStudents}
        </h4>
        {/* show arrow in respect to progress */}
        <BsArrowDown
          className={`${
            progress
              ? "text-red-600 w-10 h-10 rotate-180"
              : "w-10 h-10 text-blue-600"
          }`}
        />
      </div>
    </div>
  )
}

export default DepartmentCard
