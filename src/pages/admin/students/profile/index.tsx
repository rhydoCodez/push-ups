import Image from "next/image"
import React, { useState } from "react"
import { Footer, Header } from "@/src/components"
import { Sidebar } from "@/src/components/utilities"
import { BiEdit } from "react-icons/bi"
import Link from "next/link"

const Profile = () => {
  const [overallPerformance, setOverallPerformance] = useState<number>(85)
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
          <div className="text-gray-900 flex items-center justify-start w-full flex-col space-y-10">
            {/* profile image */}
            <div className="relative w-[110px] h-[110px] flex items-center justify-center">
              <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border-4 object-cover border-genius-darkBlue">
                <Image
                  src="/assets/profile_image.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Link href="/admin/students/profile/edit-profile">
                <a className="absolute z-20 bottom-2 right-1 p-1 w-9 h-9 bg-gradient-to-r from-genius-darkBlue to-genius-darkRed rounded-full flex items-center justify-center">
                  <BiEdit className="w-6 h-6 text-gray-50" />
                </a>
              </Link>
            </div>
            {/* user info */}
            <div>
              <div className="flex space-x-6 mb-5 w-full items-center justify-between">
                <label htmlFor="fullName">Full Name</label>
                <input
                  className="outline-none border-2 bg-gray-50 p-2"
                  type="text"
                  placeholder="Oguntunde Omolewa"
                  id="fullName"
                />
              </div>
              <div className="flex space-x-6 mb-5 w-full items-center justify-between">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  className="outline-none border-2 bg-gray-50 p-2"
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="omolewa@gmail.com"
                />
              </div>
              <div className="flex space-x-6 mb-5 w-full items-center justify-between">
                <label htmlFor="department">Department</label>
                <input
                  className="outline-none border-2 bg-gray-50 p-2"
                  type="text"
                  id="department"
                  placeholder="Arts Department"
                />
              </div>
            </div>

            {/* student info card */}

            {/* overall performance */}
            <div>
              <h3 className="font-medium text-2xl text-center mb-3">
                Overall Performance %
              </h3>
              <p className="px-32 py-3 rounded-full text-gray-50 font-semibold text-4xl bg-gradient-to-r from-genius-darkBlue to-genius-darkRed">
                {overallPerformance} %
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
