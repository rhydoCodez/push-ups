import mongoose from "mongoose"

const mongo_uri = process.env.MONGO_URI as string

const connectDB = async () => {
  if (!mongo_uri) {
    console.log("Please provide Mongo Uri!...")
    return
  }

  if (mongoose.connections[0].readyState >= 1) {
    console.log("Already connected to Database!...")
    return
  }

  try {
    await mongoose.connect(mongo_uri)
    console.log("Successfully connected to Database!...")
  } catch (err: any) {
    console.log("Error connecting to Database!...")
    console.log(err.message)
    return
  }
}

export default connectDB
