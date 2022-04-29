import Link from "next/link"
// import { useSelector, useDispatch } from "react-redux"
// import { RootState } from "@/src/app/store"
import { SubjectsDropdown } from "@/src/components/utilities"

const StartTest = () => {
  // const { info } = useSelector((state: RootState) => state.student)
  return (
    <div className="bg-gray-200 h-full font-poppins min-h-screen flex items-center justify-center flex-col">
      <div>
        <h2 className="font-semibold text-3xl">
          Welcome, <span className="text-genius-darkBlue">Ademola</span>
        </h2>
        <h3 className="text-center text-xl font-semibold text-gray-800">
          Registerd Subjects
        </h3>
      </div>
      <div className="">
        <SubjectsDropdown />
      </div>
    </div>
  )
}

export default StartTest

// get student info
