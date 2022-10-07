import User from "../models/User";
import UserModel from "./UserModel";import UserDaoI from "./UserDaoI";
import userModel from "./UserModel";

export default class UserDao implements UserDaoI {
    async createUser(user: User): Promise<User> {
        const userModelObj = await UserModel.create(user);
        const newUser = new User(userModelObj.getUserName(),
            userModelObj.getFirstName(), userModelObj.getLastName());
        return newUser;
    }

    async deleteUser(uid: string): Promise<any> {
        return await UserModel.deleteOne({id: uid});
    }
    // declare that the function is asynchronous
    async findAllUsers(): Promise<User[]> {
        // find wihtout a user passed in will return all documents form user table

        return await UserModel.find();
    }

    // This method looks for a document based on id
    // assigned by mongo. Uses findbyId method.
    async findUserById(uid: string): Promise<any> {
        // TODO ask, shoudl param be {id: uid}
        return await UserModel.findById(uid);
    }

    async updateUser(uid: string, user: User): Promise<any> {
        //The $set operator replaces the value of a field with the specified value.
        // TODO ask, only updates certain fields or all?? what if only 1 attr change?
        return await UserModel.updateOne({id: uid, $set: user});
    }

}