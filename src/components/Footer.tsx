import Image from "next/image"
import React from "react"
import { RiFacebookFill } from "react-icons/ri"
import { AiOutlineTwitter } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="bg-genius-gray/10 p-5 flex relative footer ">
      <div className="w-1/3">
        <div className="bg-white border-8 border-genius-gray/50 ring-4 ring-white rounded-full w-24 h-24 flex items-center justify-center absolute -top-10 left-20">
          <div className="relative">
            <Image src="/assets/logo.png" alt="" width={60} height={60} />
          </div>
        </div>
        <div className="mt-14 w-full text-center text-sm">
          <p>&copy; 2022 First Genius</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
      {/* right */}
      <div className="w-full flex justify-around items-end text-sm">
        <p className="font-medium">firstgenius@gmail.com</p>
        <p className="font-medium">+2356890123</p>
        <div>
          <h3 className="text-right text-genius-darkBlue font-bold text-xl">
            Contact Us
          </h3>
          <div className="flex items-center justify-between space-x-6">
            <RiFacebookFill />
            <AiOutlineTwitter />
            <BsInstagram />
            <p className="font-medium">first_geniusCollege</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
