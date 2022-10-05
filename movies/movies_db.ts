import mongoose from "mongoose";

// put schemas in separate files

const moviesSchema = new mongoose.Schema({
    title: String,
    released: Date,
    year: Number},{collection: "movies"}
);

export default moviesSchema;