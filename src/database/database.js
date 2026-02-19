import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true   // ✅ fixed
  },
  email: {
    type: String,
    required: true,  // ✅ fixed
    unique: true
  },
  password: {
    type: String,
    required: true   // ✅ fixed
  }
});

const User = mongoose.model("users", UserSchema);
export default User;
