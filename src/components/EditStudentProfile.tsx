import Image from "next/image"
import React from "react"

const EditStudentProfile = () => {
  return (
    <div>
      <h2>Edit Student Profile</h2>
      <form action="">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Oguntunde Omolewa Christiana"
          />
        </div>
        <div>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            placeholder="omolewa@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="department">Department</label>
          <input type="text" id="department" placeholder="Arts Department" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        {/* profile image */}
        <div>
          <h3>Choose a file</h3>
          <p>Only .jpeg and .png formats are allowed.</p>
          <div className="relative w-20 h-20">
            <Image src="/assets/profile_image.webp" alt="" layout="fill" />
          </div>

          {/* image picker */}
          <input type="file" name="profile_image" id="" title="Browse files" />
        </div>

        {/* save or discard */}
        <button type="submit">Save</button>
        <button>Discard</button>
      </form>
    </div>
  )
}

export default EditStudentProfile
