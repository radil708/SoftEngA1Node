import mongoose from "mongoose";
import moviesSchema from "./movies-schema";

// model knows how to talk to database useing api
// .model will self implement a design pattern (Object relational mapping) maps objects to data
// schema
const moviesModel = mongoose.model("MovieModel", moviesSchema)

export default moviesModel;