import { GetServerSideProps } from "next"
import axios from "axios"

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
  const res = await axios.get("http://localhost:3000/api/auth/admin/register")
  console.log(res.data)
  const allStaffs = res.data.staffs

  return {
    props: {
      staffs: allStaffs,
    },
  }
}
