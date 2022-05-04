import { FormEvent, useState } from "react"
import { MdOutlineLogout } from "react-icons/md"
import Link from "next/link"
import axios from "axios"
import { sidebarData } from "@/src/data/sidebar"

const Sidebar = () => {
  const [selected, setSelected] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")

  const handleLogout = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await axios.get("http://localhost:3000/api/auth/logout")
      return
    } catch (err: any) {
      return err.response.data.message
    }
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
      <button title="Logout" onClick={handleLogout}>
        <MdOutlineLogout className="dashboard__icon" />
      </button>
    </aside>
  )
}

export default Sidebar
