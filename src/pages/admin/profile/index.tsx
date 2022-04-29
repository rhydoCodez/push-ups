import { Footer, Header } from "@/src/components"
import { Sidebar } from "@/src/components/utilities"

const Settings = () => {
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
        <section className="main__content w-full ml-10"></section>
      </div>
      <Footer />
    </div>
  )
}

export default Settings
