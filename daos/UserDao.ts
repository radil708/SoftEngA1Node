import User from "../models/User";
import UserModel from "../mongoose/UserModel";
import UserDaoI from "../interfaces/UserDaoI";
import userModel from "../mongoose/UserModel";


export default class UserDao implements UserDaoI {
    async createUser(user: User): Promise<User> {
        const userModelObj = await UserModel.create(user);
        // useerModelObj is a dictionary
        const newUser = new User(userModelObj['username'],
        userModelObj['firstName'], userModelObj['lastName'],
        userModelObj['password'], userModelObj['email']);
        return newUser;
    }

    async deleteUser(uid: string): Promise<number> {
        const modelsAfterDeletion = await UserModel.deleteOne({_id: uid});
        return modelsAfterDeletion.deletedCount;
    }
    // declare that the function is asynchronous
    async findAllUsers(): Promise<User[]> {
        // find wihtout a user passed in will return all documents form user table
        // gets an array of user models
        const allUserJsons = await UserModel.find();
        // for each user model in array allUserJsons
        return allUserJsons.map(eachUserJSON => new User(eachUserJSON['username'],
            eachUserJSON['firstName'], eachUserJSON['lastName'], eachUserJSON['password'],
            eachUserJSON['email']));
    }

    // This method looks for a document based on id
    // assigned by mongo. Uses findbyId method.
    async findUserById(uid: string): Promise<any> {
        // TODO ask, shoudl param be {id: uid} //
        return await UserModel.findById(uid);
    }

    // get user by filterbyName
    async findUserbyUserName(userNameIn: string): Promise<any> {
        return await UserModel.find({username: userNameIn });
    }

    async updateUser(uid: string, user: User): Promise<number> {
        //The $set operator replaces the value of a field with the specified value.
        // TODO ask, only updates certain fields or all?? what if only 1 attr change?
        const updatedUserArr =  await UserModel.updateOne(
            {_id: uid},
            {$set: user}
        );
        //console.log(updatedUserArr);
        // TODO ask why upserted count doesnt work
        return updatedUserArr.matchedCount;
    }
}