export class PersonWithMoneyConstructor {
    money1: number;
    money2: number;

    constructor (money1: number, money2: number){
        this.money1 = money1;
        this.money2 = money2;
    }

    getMonies() {
        return this.money1 + this.money2;
    }

}