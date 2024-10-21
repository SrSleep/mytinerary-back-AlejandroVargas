import mongoose from "mongoose";

let url = process.env.URI_MONGO;

async function connection() {
  try {
    await mongoose.connect(url);
    console.log('connection established');
    
  } catch (error) {
    console.log(error);
  }
}

connection();
