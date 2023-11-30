export class Product {

    //Declare fields
    pid: number;
    name: string;
    price: number;
    ratings: number;

    //Define constructor
    constructor(pid: number, name: string, price: number, ratings: number) {

        this.pid = pid;
        this.name = name;
        this.price = price;
        this.ratings = ratings;
    }

    //Define method named : showProduct()
    showProduct() {

        console.log(this.pid + " " + this.name);

        //console.log(this.pid + " " + this.name + "  " + this.price + " " + this.ratings );

    }
}