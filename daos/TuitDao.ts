import Tuit from "../models/Tuit";
import TuitSchema from "../mongoose/TuitSchema";
import TuitModel from "../mongoose/TuitModel";
import User from "../models/User";
import tuitModel from "../mongoose/TuitModel";

export default class TuitDao {
    async findAllTuits(): Promise<Tuit[]> {
        const allTuitsJSON = await TuitModel.find();
        return allTuitsJSON.map(eachTuit => new Tuit(eachTuit['tuit'],
            eachTuit['postedOn'],eachTuit['postedBy']))
    }

    async createTuit(tuit: Tuit): Promise<Tuit> {
        const newTuitModelObj = await TuitModel.create(tuit);
        // set tuit values
        //console.log(newTuitModelObj)
        const tuitObj = await new Tuit(newTuitModelObj['tuit'],
            newTuitModelObj['postedOn'], newTuitModelObj['postedBy']);
        return tuitObj;
    }
}