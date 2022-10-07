import {Request, Response,Express} from "express";
import UserDao from "./UserDao";
import UserControllerI from "./UserControllerI";

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

    createUser(req: e.Request, res: e.Response): void {
    }

    deleteUser(req: e.Request, res: e.Response): void {
    }

    async findAllUsers(req: e.Request, res: e.Response): void {
    }

    findUserById(req: e.Request, res: e.Response): void {
    }

    updateUser(req: e.Request, res: e.Response): void {
    }

}