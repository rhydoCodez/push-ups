import mongoose, { Schema } from "mongoose"
import argon from 'argon2'

mongoose.Promise = global.Promise

const adminSchema = new Schema(
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
    userName: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      unique: true,
    },
    emailAddress: {
      type: String,
      required: [true, "Email Address is required"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "STAFF", "SUB-ADMIN"],
      required: true,
    },
    contactNumber: {
      type: Number,
      required: [true, "Contact Number is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["ENABLED", "DISABLED"],
      default: "ENABLED",
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

adminSchema.pre("save", async function hashPassword(next) {
  const admin = this
  if (admin.isModified || admin.isNew) {
    admin.password = await argon.hash(admin.password)
  }

  next()
})

export default mongoose.models?.Admin || mongoose.model("Admin", adminSchema)
