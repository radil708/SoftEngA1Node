import {Request, Response,Express} from "express";
import UserDao from "./UserDao";
import UserControllerI from "./UserControllerI";
import * as movieDao from "../movies/movies_dao";

export default class UserController implements UserControllerI {
    // attributes
    app: Express;
    userDao: UserDao;

    constructor(app: Express, userDao: UserDao) {
        this.app = app;
        this.userDao = userDao;
        // Set attributes of app attribute
        this.app.get('/users', this.findAllUsers);
        this.app.get('/users/:userid', this.findUserById);
        this.app.post('/users', this.createUser);
        this.app.delete('/users/:userid', this.deleteUser);
        this.app.put('/users/:userid', this.updateUser);

    }

    createUser = async (req: Request, res: Response) => {
        // assign variable to store PUT JSON body from client
        const newUserJSON = req.body;
        // user model to create a new user in database
        const newUser = await this.userDao.createUser(newUserJSON);
        // add new user JSON info to response?
        res.json(newUser);
    }

    deleteUser(req: Request, res: Response): void {
    }

    findAllUsers(req: Request, res: Response): void {
    }

    findUserById(req: Request, res: Response): void {
    }

    updateUser(req: Request, res: Response): void {
    }

}