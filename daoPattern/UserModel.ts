import mongoose from "mongoose";
import UserSchema from "./UserSchema";

/*
This model is used to interact with the MongoDB. The parameter
"name" is the name of the table this model is modeled after.
so 'UserModel' is the name of the table/collection in the database.
T
 */
const UserModel = mongoose.model('UserModel', UserSchema);
export default UserModel;