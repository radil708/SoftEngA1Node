import mongoose from "mongoose";

const TuitSchema = new mongoose.Schema({
    tuit: {type: String, required: true},
    postedOn: Date,
    postedByUserName: String,
    postedByUserID: String
}, {collection: "Tuits"});
export default TuitSchema;