import User from "../models/User";

/*
This interface declares the methods required by any userDaos.
All the methods must return a Promise which allows the
program to keep going while waiting for a response
from database.
Also DAO's abstract code used to interact with database
 */
export default interface UserDaoI {
    findAllUsers(): Promise<User[]>;
    findUserById(uid: string): Promise<any>;
    createUser(user: User): Promise<User>;
    updateUser(uid: string, user: User): Promise<any>;
    deleteUser(uid: string): Promise<any>;
}
