import Tuit from "../models/Tuit";
import {Request, Response} from "express";

export default interface TuitControllerI{
    //TODO should this return void?
    findAllTuits(req: Request, res: Response): void;
    findTuitById(req: Request, res: Response): void;
    // create user will return a new user as a response to let client know it succeded
    createTuit(req: Request, res: Response): void;
    deleteTuit(req: Request, res: Response): void;
    updateTuit(req: Request, res: Response): void;
    findTuitsByUser (req: Request, res: Response) : void;
}