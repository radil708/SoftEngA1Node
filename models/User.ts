// import classes that the User class is composed of
import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";

/*
The User class represents a user class on Tuiter. It uses the enums: AccountType and
Marital status. It also uses a Location object as part of its attributes.
 */
//TODO Ask. I guess when building attribute you set default values always??
export default class User {
    private username: string = '';
    private password: string = '';
    private firstName: string | null = null;
    private lastName: string | null = null;
    private email: string = '';
    private profilePhoto: string | null = null;
    private headerImage: string | null = null;
    private accountType: AccountType = AccountType.Personal;
    private maritalStatus: MaritalStatus = MaritalStatus.Single;
    private biography: string | null = null;
    private dateOfBirth: Date | null = null;
    private joined: Date = new Date();
    private location: Location | null = null;

    constructor(userNameIn: string, firstNameIn: string, lastNameIn: string) {
        this.username = userNameIn;
        this.firstName = firstNameIn;
        this.lastName = lastNameIn;
    }

    getUserName(): string {
        return this.username;
    }

    getFirstName(): string {
        let retVal = '';
        if (this.firstName != null) {
            retVal = this.firstName;
        }
        return retVal;
    }

    getLastName(): string {
        let retVal = '';
        if (this.lastName != null) {
            retVal = this.lastName;
        }
        return retVal;
    }

}

