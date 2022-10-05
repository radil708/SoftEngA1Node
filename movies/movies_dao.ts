// implement all functions you need here
//building an api??


import moviesModel from "./movies_models";
import movies_models from "./movies_models";

// making functions specific to your domain. Internals ues higher level api
const findAllMovies = () => {
    return moviesModel.find();
}

//mid is not the id auto genned by javascript
export const findMovieById = (mid: string) => {
    return moviesModel.findById(mid);
}

export const createMovie = (movie: any) => {
    moviesModel.create(movie);
}

const deleteMovie = (id: string) => {}