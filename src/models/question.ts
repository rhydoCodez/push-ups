import mongoose, { Schema } from "mongoose"

mongoose.Promise = global.Promise

const questionSchema = new Schema(
  {
    examType: {
      type: String,
      required: true,
      enum: ["ACADEMICS", "JAMB/UTME", "POST JAMB/UTME"],
    },
    subject: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: [true, "Question is required"],
      trim: true,
    },
    correctAnswer: {
      type: String,
      required: [true, "Correct Answer is required"],
      trim: true,
    },
    incorrectAnswers: {
      type: [String],
      trim: true,
      required: [true, "Incorrect Answers is required"],
    },
  },
  {
    timestamps: true,
  }
)

const Question = mongoose.model("Question", questionSchema)

export default Question
