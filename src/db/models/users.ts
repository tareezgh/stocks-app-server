import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", usersSchema);

export default Users;
