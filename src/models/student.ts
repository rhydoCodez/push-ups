import mongoose, { Schema } from "mongoose"
import argon from "argon2"

mongoose.Promise = global.Promise

const studentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      trim: true,
    },
    emailAddress: {
      type: String,
      required: [true, "Email Address is required"],
      unique: true,
      trim: true,
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

studentSchema.pre("save", async function hashPassword(next) {
  const student = this
  if (student.isModified || student.isNew) {
    student.password = await argon.hash(student.password)
  }

  next()
})

export default mongoose.models.Student ||
  mongoose.model("Student", studentSchema)
