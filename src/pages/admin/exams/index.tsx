import { Footer, Header } from "@/src/components"
import { Search, Sidebar } from "@/src/components/utilities"
import Link from "next/link"

const examTypes = ["JAMB/UTME", "ACADEMICS", "POST JAMB/UTME"]
const marks = [1, 2, 3, 5, 6, 10, 15, 20, 25]

const Exams = () => {
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
          <div className="w-full flex items-center justify-center flex-col text-gray-800">
            <h3 className="text-center font-semibold text-xl text-genius-gray mb-5">
              Publish Examination
            </h3>

            <form action="">
              <div className="general__input__container">
                <label htmlFor="examType" className="whitespace-nowrap">
                  Examination Type
                </label>
                <select name="examType" id="" className="general__input">
                  {examTypes.map((et, i) => (
                    <option value={et} key={i}>
                      {et}
                    </option>
                  ))}
                </select>
              </div>
              <div className="general__input__container">
                <label htmlFor="examDate" className="whitespace-nowrap">
                  Dates of Examination
                </label>
                <input
                  type="date"
                  name="examStartDate"
                  id=""
                  className="general__input"
                />
                <p>-</p>
                <input
                  type="date"
                  name="examEndDate"
                  id=""
                  className="general__input"
                />
              </div>

              <div className="general__input__container">
                <label className="whitespace-nowrap" htmlFor="examTimes">
                  Times of Examination
                </label>
                <input type="time" name="" id="" className="general__input" />
                <p> / </p>
                <input type="time" name="" id="" className="general__input" />
              </div>

              <div className="general__input__container">
                <label htmlFor="marks" className="whitespace-nowrap">
                  Marks for Correct Answer
                </label>
                <select name="marks" id="marks" className="general__input">
                  {marks.map((mark, id) => (
                    <option value={mark} key={id}>
                      {mark} marks
                    </option>
                  ))}
                </select>
              </div>

              <button className="w-full flex items-center justify-center my-6">
                <h3 className="bg-genius-darkBlue w-fit px-10 text-xl py-2 rounded-full font-semibold text-gray-50">
                  Publish Examination
                </h3>
              </button>

              <div className="text-center">
                <Link href="/admin/exams/register-new-exam">
                  <a className="font-bold text-2xl text-center text-genius-gray">
                    Register New Exam
                  </a>
                </Link>

                <h4 className="text-genius-gray font-semibold text-xl my-2">
                  Register Students
                </h4>

                {/* search students */}
                <div className="w-full flex items-center justify-center my-5">
                  <Search searchQuery="" />
                </div>

                {/* students table */}
                <div></div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Exams
