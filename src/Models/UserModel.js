import { Schema, model } from 'mongoose';




const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
    enum: ["Mr", "Mrs", "Miss"]
  },
  email: {
    type: String,
    required: true,
    unique:true
 
  },
  password: {                                 
    type: String,
    required: true,
  },

}, { timestamps: true });

export default model("Author", UserSchema)
