export default class Game{
    title: string;
    description?: string;
    releaseDate: Date;
    price: number;
    promotion: boolean;

    constructor(title: string, description?: string, releaseDate: Date = new Date(), price: number = 0, promotion: boolean = false){
        this.title = title;
        this.description = description;
        this.releaseDate = releaseDate;
        this.price = price;
        this.promotion = promotion;
    }
}