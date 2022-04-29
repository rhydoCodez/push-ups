import type { NextPage } from "next"
import Head from "next/head"
// import { useSelector } from "react-redux"
// import { RootState } from "@/src/app/store"
import { StudentLoginForm } from "@/src/components/utilities"

const Home: NextPage = () => {
  // check error messsage
  // const loginError = useSelector((state: RootState) => state.loginError.message)

  return (
    <div className="">
      <Head>
        <title>Login | First Genius</title>
        <meta name="description" content="first genius test application" />
        <link rel="icon" href="/assets/logo.ico" />
      </Head>

      <main className="userLogin__container">
        <div className="bg-genius-blue bg-opacity-90 relative w-full h-full flex items-center justify-center userLogin__left">
          <h2 className="font-bold text-5xl text-white max-w-sm text-center tracking-wider">
            Student Login Portal
          </h2>
        </div>
        <div className="userLogin">
          {/* show error message if any */}
          {/* <div
            className={`${
              loginError
                ? "absolute transition-all duration-500 transform right-5 top-[20px] bg-red-600 px-4 py-2 font-normal text-base text-white ease-in-out"
                : "hidden"
            }`}
          >
            {loginError}
          </div> */}
          {/* login form for students */}
          <StudentLoginForm />
        </div>
      </main>
    </div>
  )
}

export default Home
