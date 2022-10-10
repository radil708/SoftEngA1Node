import User from "./User";
/*
this class represent a tuit/tweet. It uses the User class as an attribute.
 */
export default class Tuit {
    private tuit: string = '';
    private postedOn: Date = new Date();
    private postedBy: User | null;
    private userObjectId: string = '';

    constructor(contentIn : string, postedOnIn: Date) {
        this.tuit = contentIn;
        this.postedOn = postedOnIn;
        this.postedBy = null;
    }

    setAuthor(user: User | null): void {
        this.postedBy = user;
    }

    getDate(): Date {
        return this.postedOn;
    }

    setUserId(userId : string): void {
        this.userObjectId = userId;
    }

    post() : string {
        return this.tuit;
    }

    getUserID(): string {
        return this.userObjectId;
    }
}
