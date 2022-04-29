import { useState } from "react"
import Image from "next/image"
import { MdOutlineLogout } from "react-icons/md"
import Link from "next/link"
import axios from "axios"
import { sidebarData } from "../../data/sidebar"
import { IconType } from "react-icons"

const Sidebar = () => {
  const [selected, setSelected] = useState<boolean>(false)

  const handleSelected = () => {
    setSelected(true)

    // className={`${selected ? "border-b-2 border-gray-50 pb-2" : ""}`}
  }

  const handleLogout = async (e: Event) => {
    e.preventDefault()

    const res = await axios.get("/api/auth/logout")
    const data = res.data.json()
    console.log(data)
  }
  return (
    <aside className="dashboard__sidebar">
      {sidebarData.map((data, index) => {
        const { url, title, Icon } = data
        return (
          <Link href={url} key={index} passHref>
            <a title={title}>
              <Icon className="dashboard__icon" />
            </a>
          </Link>
        )
      })}

      {/* logout */}
      <button title="Logout" onClick={() => handleLogout}>
        <MdOutlineLogout className="dashboard__icon" />
      </button>
    </aside>
  )
}

export default Sidebar
