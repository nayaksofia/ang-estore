export class User{
    //Declare Field
    name: string = "";
    age:number=0;
    birthDate: Date;

    constructor( name: string, age : number ,birthDate : Date){
        this.name = name;
        this.age = age;
        this.birthDate = birthDate;

    }
}