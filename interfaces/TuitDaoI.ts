import Tuit from "../models/Tuit";

/*
This interface declares the methods required by any userDaos.
All the methods must return a Promise which allows the
program to keep going while waiting for a response
from database.
Also DAO's abstract code used to interact with database
 */
export default interface TuitDaoI {
    findAllTuits(): Promise<Tuit[]>;
    createTuit(tuitIn: Tuit): Promise<Tuit>;
    updateTuit(tuitId: string, tuit : Tuit): Promise<number>;
    deleteTuit(tuitId: string): Promise<number>;
    findTuitById(id: string) : Promise<Tuit>;
    findTuitsByUser(userId: string): Promise<Tuit[]>;
}
