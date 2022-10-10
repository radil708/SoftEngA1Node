import userToTuitModel from "./userToTuit-model";
import userToTuitSchema from "./userToTuit-schema";


export const findTuitsFromUser = (userObjectIdStr: string) => {
    return userToTuitModel
        // find document with matching userId
        .find({user: userObjectIdStr},
                     // get me only the tuit id
            {tuit: 1, _id: 0})
        // TODO ask does this look at all OId's in database?
        /*
        tuit is a field in userToTuitSchema
        in the schema we say it reference the TuitModel
        So it will look at all TuitModels and find a matching tuitId
        replaces tuit field with tuit that was found
         */
        .populate('tuit')
        .exec();
}

export const addUserToTuit = (userObjectIdStr: string, tuitObjectIdStr: string ) => {
    userToTuitModel.create({userObjectIdStr}, {tuitObjectIdStr});
}

export const addTuitToUser = (tuitObjectIdStr: string,userObjectIdStr: string ) => {
    userToTuitModel.create({userObjectIdStr}, {tuitObjectIdStr});
}