import { AddNewQuestion, Footer, Header } from "../../../components"
import { Sidebar } from "../../../components/utilities"


const AddQuestion = () => {
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
          <AddNewQuestion />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default AddQuestion
