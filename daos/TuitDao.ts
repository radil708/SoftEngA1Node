import Tuit from "../models/Tuit";
import TuitSchema from "../mongoose/TuitSchema";
import TuitModel from "../mongoose/TuitModel";
import User from "../models/User";
import tuitModel from "../mongoose/TuitModel";
import {promises} from "dns";

export default class TuitDao {
    oid = require('mongodb').ObjectId;

    async findAllTuits(): Promise<Tuit[]> {
        const allTuitsJSON = await TuitModel.find();
        return allTuitsJSON.map(eachTuit => new Tuit(eachTuit['tuit'],
            eachTuit['postedOn']));
    }

    async createTuit(tuitIn: Tuit): Promise<Tuit> {
        const tuitMongooseModle = await TuitModel.create({tuit: tuitIn.post(),
                postedOn: tuitIn.getDate(), postedBy: this.oid(tuitIn.getUserID())});
        // assumption is that request will have userId

        return new Tuit(tuitMongooseModle?.tuit.toString() ?? '',
            new Date(tuitMongooseModle?.postedOn ?? (new Date())));
    }

    async deleteTuit(tuitId: string): Promise<any> {
        return await TuitModel.deleteOne({_id : tuitId});
    }

    async updateTuit(tuitId: string, tuit : Tuit) : Promise<any> {
        return TuitModel.updateOne(
            {_id: tuitId},
            {$set: {tuit: tuit['tuit']}});
    }

    async findTuitById(id: string) : Promise<Tuit> {
        const tMongoModel = await TuitModel.findById(id).populate('postedBy').exec();
        const tuit = new Tuit(tMongoModel.tuit ?? '',
            new Date(tMongoModel?.postedOn ?? (new Date())))
        return tuit
    }

}
