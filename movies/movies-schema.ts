import mongoose from "mongoose";

// put schemas in separate files
// Schema is the format of each document in a collection
// collection is labeled on line 9 as "movies" this must be the name
// in database
const moviesSchema = new mongoose.Schema({
    title: String,
    year: Number},{collection: "movies"}
);

export default moviesSchema;