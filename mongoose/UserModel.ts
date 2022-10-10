import mongoose from "mongoose";
import UserSchema from "./UserSchema";

/*
This model is used to interact with the MongoDB.
 */
const UserModel = mongoose.model('UserModel', UserSchema);
export default UserModel;