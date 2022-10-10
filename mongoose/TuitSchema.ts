import mongoose from "mongoose";

const TuitSchema = new mongoose.Schema({
    tuit: {type: String, required: true},
    postedOn: Date,
    // This stores reference to something that lives
    // in another collection
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'}
}, {collection: "Tuits"});
export default TuitSchema;