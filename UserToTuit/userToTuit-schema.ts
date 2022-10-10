import mongoose from "mongoose";

const userToTuitSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    tuit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TuitModel'
    }
}, {collection: 'UserToTuitsLink'});
export default userToTuitSchema;