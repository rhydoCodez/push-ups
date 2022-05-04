import { SubjectsDropdown } from "@/src/components/utilities"

const StartTestOrExam = () => {
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

export default StartTestOrExam

