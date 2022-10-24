import Tuit from "../models/Tuit";
import TuitSchema from "../mongoose/TuitSchema";
import TuitModel from "../mongoose/TuitModel";
import User from "../models/User";
import tuitModel from "../mongoose/TuitModel";
import {promises} from "dns";
import TuitDaoI from "../interfaces/TuitDaoI";
import userModel from "../mongoose/UserModel";
import UserModel from "../mongoose/UserModel";

export default class TuitDao implements TuitDaoI {
    oid = require('mongodb').ObjectId;

    async findAllTuits(): Promise<Tuit[]> {
        const allTuitsJSON = await TuitModel.find();

        const allTuitsArray = allTuitsJSON.map(eachTuit => new Tuit(
            eachTuit._id.toString(),
            eachTuit.postedBy._id.toString(),
            eachTuit['tuit'],
            eachTuit['postedOn']
            )
        );

        //TODO ask should I add user attribute even if we already have user ID

        return allTuitsArray;
    }

    async createTuit(tuitIn: Tuit): Promise<Tuit> {
        const userFromDb = await userModel.findById(tuitIn.getUserID());

        const tuitJSON = await TuitModel.create({tuit: tuitIn.getContent(),
                postedOn: tuitIn.getDate(), postedBy: userFromDb});

        const tuitResponse = new Tuit(
            tuitJSON._id.toString(),
            userFromDb._id.toString(),
            tuitJSON.tuit,
            tuitJSON.postedOn
        );

        const userT = new User(
            userFromDb._id.toString() || '',
            userFromDb['username'] || '',
            userFromDb['firstName'] || '',
            userFromDb['lastName'] || '',
            userFromDb['password'] || '',
            userFromDb['email'] || ''
        )

        tuitResponse.setUser(userT);

        return tuitResponse;
    }

    async deleteTuit(tuitId: string): Promise<any> {
        return await TuitModel.deleteOne({_id : tuitId});
    }

    async updateTuit(tuitId: string, tuit : Tuit) : Promise<number> {
        const retTuit =  await TuitModel.updateOne(
            {_id: tuitId},
            {$set: tuit}
    );
        return retTuit.matchedCount;
    }

    async findTuitById(id: string) : Promise<Tuit> {
        const tuitFromDb = await TuitModel.findById(id);
        const userFromDb = await userModel.findById(tuitFromDb.getUserID());

        const userT = new User(
            userFromDb._id.toString() || '',
            userFromDb['username'] || '',
            userFromDb['firstName'] || '',
            userFromDb['lastName'] || '',
            userFromDb['password'] || '',
            userFromDb['email'] || '')

        const tuitResponse = new Tuit(
            tuitFromDb._id.toString(),
            userFromDb._id.toString(),
            tuitFromDb.tuit,
            tuitFromDb.postedOn
        );

        tuitResponse.setUser(userT);

        return tuitResponse

    }

    async findTuitsByUser(userId: string): Promise<Tuit[]> {

        // get target user, hopefully they exist
        const userTarget = await UserModel.findById(userId)

        const allTuitsByUser = await TuitModel.find({postedBy: userTarget._id})

        const allTuitsArray = allTuitsByUser.map(eachTuit => new Tuit(
                eachTuit._id.toString(),
                eachTuit.postedBy._id.toString(),
                eachTuit['tuit'],
                eachTuit['postedOn']
            )
        );

        allTuitsArray.forEach(indivTuit => indivTuit.setUser(
            new User(
                userTarget._id.toString() || '',
                userTarget['username'] || '',
                userTarget['firstName'] || '',
                userTarget['lastName'] || '',
                userTarget['password'] || '',
                userTarget['email'] || '')
            )
        );

        return allTuitsArray;
    }
}
