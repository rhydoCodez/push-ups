import { AdminLoginForm } from "@/src/components/utilities"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { connectDB } from "@/src/utils"

const Admin = () => {
  return (
    <div>
      <Head>
        <title>Admin Login | First Genius</title>
        <link rel="icon" href="/assets/logo.ico" />
      </Head>
      <div className="adminLogin__container">
        <div className="bg-genius-yellow bg-opacity-90 relative w-full h-full flex items-center justify-center adminLogin__left">
          <h2 className="font-bold text-5xl text-white max-w-sm text-center tracking-wider">
            Admin Login Portal
          </h2>
        </div>
        <div className="adminLogin">
          {/* admin login page */}
          <div>
            <AdminLoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin

export const getServerSideProps: GetServerSideProps = async () => {
  await connectDB()

  return {
    props: {},
  }
}
