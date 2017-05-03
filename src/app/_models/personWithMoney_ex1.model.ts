export class PersonWithMoney {
    money1: number = 0;
    money2: number = 0;

    constructor (){
    }

    getMonies() {
        return this.money1 + this.money2;
    }

}