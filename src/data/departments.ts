import { AiTwotoneExperiment } from "react-icons/ai"
import { ImLab } from "react-icons/im"
import { GiReceiveMoney } from "react-icons/gi"
import { BsPalette } from "react-icons/bs"

const departments = [
  {
    name: "Science Department",
    numberofRegisteredStudents: 38,
    Icon: AiTwotoneExperiment,
    progress: true,
  },
  {
    name: "Commercial Department",
    numberofRegisteredStudents: 56,
    Icon: GiReceiveMoney,
    progress: true,
  },
  {
    name: "Art Department",
    numberofRegisteredStudents: 59,
    Icon: BsPalette,
    progress: false,
  },
]

export default departments
