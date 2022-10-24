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
        this.app.get('/tuits/:tid', this.findTuitById)
        this.app.get('/users/:uid/tuits', this.findTuitsByUser)
        this.app.post('/users/:uid/tuits',this.createTuit);
        this.app.delete('/tuits/:tid', this.deleteTuit)
        this.app.put('/tuits/:tid', this.updateTuit)


    }


    createTuit = async (req: Request, res: Response) => {

        const userId = req.params.uid;
        //TODO what if user does not exist?

        const clientTuit = new Tuit(
           '',
            userId.toString(),
            req.body.tuit,
            req.body.postedOn
        )

        const tuitFromDb = await this.tuitDao.createTuit(clientTuit);

        res.send(tuitFromDb)

    }

    deleteTuit = async (req: Request, res: Response) => {
        const tuitIdTarget = req.params.tid;
        const count = await this.tuitDao.deleteTuit(tuitIdTarget);
        res.send(count)
    }

    findAllTuits = async (req: Request, res: Response) => {
        const allTuits = await this.tuitDao.findAllTuits();
        res.json(allTuits);
    }

    findTuitById = async (req: Request, res: Response) => {
        const tuitIdTarget = req.params.tid;
        const targetTuit = await this.tuitDao.findTuitById(tuitIdTarget);
        res.json(targetTuit);

    }

    updateTuit = async (req: Request, res: Response) => {
        const tuitIdTarget = req.params.tid;

        const tuitToUpdate = await this.tuitDao.findTuitById(tuitIdTarget);

        const req_content = req.body.tuit;

        // update the content of the tuit
        tuitToUpdate.setContent(req_content);

        const updateResp = await this.tuitDao.updateTuit(tuitIdTarget, tuitToUpdate)

        res.send(updateResp);
    }

    findTuitsByUser = (req: Request, res: Response) => {

        this.tuitDao.findTuitsByUser(req.params.uid)
            .then(tuits => res.json(tuits));
    }

}