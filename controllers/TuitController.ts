import {Request, Response,Express} from "express";
import TuitControllerI from "../interfaces/TuitControllerI";
import TuitDao from "../daos/TuitDao";
import UserDao from "../daos/UserDao";
import User from "../models/User";
import Tuit from "../models/Tuit";
import {Schema} from "mongoose";

export default class TuitController implements TuitControllerI {
    app: Express;
    tuitDao: TuitDao;
    userDao: UserDao;

    constructor(appIn: Express, tuitDaoIn: TuitDao, userDaoIn: UserDao ) {
        this.app = appIn;
        this.tuitDao = tuitDaoIn;
        this.userDao = userDaoIn;

        this.app.get('/tuits', this.findAllTuits);
        this.app.post('/tuits',this.createTuit);
        this.app.delete('/tuits/:tid', this.deleteTuit)
        this.app.put('/tuits/:tid', this.updateTuit)
    }


    createTuit = async (req: Request, res: Response) => {
        // my assumption is that the request body will have
        // {userId: userObjectIdVal}
        // so I will just get the userID from that object

        const userId = req.body.postedBy

        const actualTuit = new Tuit(req.body.tuit, req.body.postedOn);
        actualTuit.setUserId(userId)
        console.log(actualTuit)
        // TODO ask this doesn't set the author for when posting to databsae, how to fix?
        //await actualTuit.setAuthor(new User(userThatPostedTuit,'','','',''));
        const tuitData = await this.tuitDao.createTuit(actualTuit);
        res.json(tuitData);

    }

    deleteTuit =  (req: Request, res: Response) => {
        this.tuitDao.deleteTuit(req.params.tid).then(status => res.json(status));
    }

    findAllTuits = async (req: Request, res: Response) => {
        const allTuits = await this.tuitDao.findAllTuits();
        res.json(allTuits);
    }

    findTuitById(req: Request, res: Response): void {
    }

    updateTuit = (req: Request, res: Response) => {
        this.tuitDao.updateTuit(req.params.tid, req.body)
            .then(status => res.json(status));
    }

}