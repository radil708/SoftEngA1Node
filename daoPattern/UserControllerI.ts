import {Request, Response} from "express";

/*
This controller interface declares all the methods required for any controller
interface type object. It uses Request and Response type object from
the express module.
 */
export default interface UserControllerI {
    findAllUsers(req: Request, res: Response): void;
    findUserById(req: Request, res: Response): void;
    createUser(req: Request, res: Response): void;
    deleteUser(req: Request, res: Response): void;
    updateUser(req: Request, res: Response): void;
}
