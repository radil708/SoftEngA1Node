
export default class movie {
    private title : string;
    private year : number;

    constructor(titleIn: string, yearIn: number) {
        this.title = titleIn;
        this.year = yearIn;
    }

    public getTitle() : string {
        return this.title;
    }

    public getYear() : number {
        return this.year;
    }




}