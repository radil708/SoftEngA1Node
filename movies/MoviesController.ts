import {Express, Request, Response} from "express";
import * as movieDao from './movies_dao';
import movie from "./movie";

class MoviesController {

    findAllMovies(req: Request, res: Response) {
        movieDao.findAllMovies()
            .then(movies => res.send(movies))
    }

    findMovieById(req: Request, res: Response) {
        const movieId = req.params.mid;
        movieDao.findMovieById(movieId)
            .then(movie => res.send(movie))
    }

    deleteMovie = () => {

    }

    createMovie = async (req: Request, res: Response) => {
        const newMovie = req.body;
        const insertedActor = await movieDao.createMovie(newMovie);
        res.json(insertedActor);


    }

    constructor(app: Express) {
        app.get('/api/movies', this.findAllMovies);
        app.get('/api/movies/:mid', this.findMovieById);
        app.delete('/api/movies/:mid', this.deleteMovie);
        app.post('/api/movies', this.createMovie);
    }

}
export default MoviesController;