
import mongoose from 'mongoose';


const User = new mongoose.Schema({
  username: {
    type: String,
    required: 'Username is required!'
  },
  password: {
    type: String,
    required: 'Password is required!'
  },
  email: {
    type: String
  }
})


export default mongoose.model('User', User);