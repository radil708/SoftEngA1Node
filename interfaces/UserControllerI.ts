import {Request, Response} from "express";
import User from "../models/User";


/**
 * This controller interface declares all the methods required for any UserController
 * type object. It uses Request and Response type object from
 * the express module.
 */
export default interface UserControllerI {

    findAllUsers(req: Request, res: Response): void;
    findUserById(req: Request, res: Response): void;
    findUserbyUserName(req: Request, res: Response): void;
    createUser(req: Request, res: Response): void;
    deleteUser(req: Request, res: Response): void;
    updateUser(req: Request, res: Response): void;
}
