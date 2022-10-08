import {Request, Response} from "express";
import User from "../models/User";

/*
This controller interface declares all the methods required for any controller
interface type object. It uses Request and Response type object from
the express module.
 */
export default interface UserControllerI {
    //TODO should this return void?
    findAllUsers(req: Request, res: Response): void;
    findUserById(req: Request, res: Response): void;
    // create user will return a new user as a response to let client know it succeded
    createUser(req: Request, res: Response): void;
    deleteUser(req: Request, res: Response): void;
    updateUser(req: Request, res: Response): void;
}
