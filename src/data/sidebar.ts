import { IconType } from "react-icons"
import { AiOutlineFileSearch } from "react-icons/ai"
import { GiRead } from "react-icons/gi"
import { MdQuestionAnswer, MdOutlineAdminPanelSettings } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"
import { CgNotes } from "react-icons/cg"

interface ISidebarData {
  url: string
  title: string
  Icon: IconType
}

export const sidebarData: ISidebarData[] = [
  {
    url: "/admin/overview",
    title: "Overview",
    Icon: AiOutlineFileSearch,
  },
  {
    url: "/admin/students",
    title: "Students",
    Icon: GiRead,
  },
  {
    url: "/admin/questions",
    title: "Questions",
    Icon: MdQuestionAnswer,
  },
  {
    url: "/admin/exams",
    title: "Exams",
    Icon: CgNotes,
  },
  {
    url: "/admin/staffs",
    title: "Staffs",
    Icon: MdOutlineAdminPanelSettings,
  },
  {
    url: "/admin/profile",
    title: "Profile",
    Icon: FaUserCircle,
  },
]
