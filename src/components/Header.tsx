import Image from "next/image"
import React, { useContext, useState } from "react"
// import AuthContext from "@/src/store/authContext"

const Header = () => {
  const [userName, setUserName] = useState<string>("Oguntunde Omolewa")
  const [role, setRole] = useState<"Staff" | "Admin">("Admin")

  // const { user, login } = useContext(AuthContext)
  return (
    <header className="admin__dashboard">
      {/* logo */}
      <div className="relative">
        <Image src="/assets/logo.png" alt="" width={60} height={60} />
      </div>

      {/* profile image */}
      <div className="flex space-x-6">
        <div>
          <h3 className="font-semibold text-lg">{userName}</h3>
          <h4 className="text-right text-sm font-medium">{role}</h4>
        </div>

        <div className="relative object-cover rounded-full w-12 h-12 overflow-hidden">
          <Image
            src="/assets/profile_image.webp"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
