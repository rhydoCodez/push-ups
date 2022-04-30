import { GetServerSideProps } from "next"
import axios from "axios"
import Admin from "@/src/models/admin"
import { connectDB } from "@/src/utils"
connectDB()

const Staffs = ({ staffs }: { staffs: any[] }) => {
  return (
    <div>
      <div>
        {staffs.map((staff) => (
          <div key={staff._id}>
            <h3>{staff.firstName}</h3>
            <h4>{staff.lastName}</h4>
            <p>{staff.userName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Staffs

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await Admin.find({})
  const allStaffs = JSON.parse(JSON.stringify(res))

  return {
    props: {
      staffs: allStaffs,
    },
  }
}
