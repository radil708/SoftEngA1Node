import User from "./User";
/*
this class represent a tuit/tweet. It uses the User class as an attribute.
 */
export default class Tuit {
    private tuit: string = '';
    private postedOn: Date = new Date();
    private postedBy: User;

    constructor(contentIn : string, postedOnIn: Date, postedByIn: User) {
        this.tuit = contentIn;
        this.postedOn = postedOnIn;
        this.postedBy = postedByIn;
    }
}
