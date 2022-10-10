import {Request, Response,Express} from "express";
import TuitControllerI from "../interfaces/TuitControllerI";
import TuitDao from "../daos/TuitDao";
import UserDao from "../daos/UserDao";
import User from "../models/User";
import Tuit from "../models/Tuit";

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
    }


    createTuit = async (req: Request, res: Response) => {
        // my assumption is that the request body will have
        // {postedBy: User}
        // so I will just get the userID from that object
        const userTotalJSON = req.body['postedBy']
        const userName = userTotalJSON.username
        const userDataJSon =
            await this.userDao.findUserbyUserName(userName);
        const userId = await userDataJSon._id
        const actualUser = await new User(userDataJSon['username'], userDataJSon.firstName,
            userDataJSon.lastName,userDataJSon.password, userDataJSon.email);
        const postedOnDate = req.body['postedOn']
        const tuitContent = req.body['tuit']

        //TODO delete consol log
        console.log(await userName, userId)

        const tuitToPost = new Tuit(tuitContent,postedOnDate, actualUser);
        this.tuitDao.createTuit(tuitToPost);

        res.json(tuitToPost);



    }

    deleteTuit(req: Request, res: Response): void {
    }

    findAllTuits = async (req: Request, res: Response) => {
        const allTuits = await this.tuitDao.findAllTuits();
        res.json(allTuits);
    }

    findTuitById(req: Request, res: Response): void {
    }

    updateTuit(req: Request, res: Response): void {
    }

}