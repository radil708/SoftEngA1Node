import mongoose from "mongoose";
import userToTuitSchema from "./userToTuit-schema";

const userToTuitModel = mongoose.model(
    'UserToTuitModel',
    userToTuitSchema
);

export default userToTuitModel;