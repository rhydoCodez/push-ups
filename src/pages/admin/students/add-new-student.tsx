import { AddNewStudent, Footer, Header } from "../../../components"
import { Sidebar } from "@/src/components/utilities"
import { connectDB } from "@/src/utils"

connectDB()

const NewStudent = () => {
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
          <AddNewStudent />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default NewStudent
