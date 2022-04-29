import mongoose, { Schema } from "mongoose"

mongoose.Promise = global.Promise

const examSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      required: true,
      type: String,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    emailAddress: {
      type: String,
      required: true,
      trim: true,
    },
    examType: {
      type: String,
      enum: ["JAMB/UTME", "POST JAMB/UTME", "ACADEMICS"],
      required: true,
    },
    subjects: {
      type: [String],
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Exam || mongoose.model("Exam", examSchema)
