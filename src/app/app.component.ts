import { Component, OnInit } from '@angular/core';

import { PersonWithMoney } from './_models/personWithMoney_ex1.model';
import { PersonWithMoneyConstructor } from './_models/personWithMoney_ex2.model';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  template: `
    <div *ngFor="let moneyPerson of peopleWithMoney_list1">
      Money1: {{ moneyPerson.money1 }} | Money2: {{ moneyPerson.money2 }} | Monies: {{ moneyPerson.getMonies() }}
    </div>
    <button (click)="addMonies()">Add Monies</button>
    <div>
    -----------------------------------------
    </div>
    <div *ngFor="let moneyPerson of peopleWithMoney_list2">
      Money1: {{ moneyPerson.money1 }} | Money2: {{ moneyPerson.money2 }} | Monies: {{ moneyPerson.getMonies() }}
    </div>
    <button (click)="subtractMonies()">Subtract Monies</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  peopleWithMoney_list1: PersonWithMoney[] = [];
  peopleWithMoney_list2: PersonWithMoneyConstructor[] = [];

  constructor() {
    
  }

  ngOnInit(){
    this.initializePeopleWithMoney();
  }

  initializePeopleWithMoney(): void{
    let peopleAmt = 10;
    for(let i=0; i < peopleAmt; ++i){
      let randomMoney1Amt = Math.floor(Math.random() * 1000);
      let randomMoney2Amt = Math.floor(Math.random() * 1000);
      let newPerson = new PersonWithMoney();
      newPerson.money1 = randomMoney1Amt;
      newPerson.money2 = randomMoney2Amt;
      this.peopleWithMoney_list1.push(newPerson);
    }

    for(let i=0; i < peopleAmt; ++i){
      let randomMoney1Amt = Math.floor(Math.random() * 1000);
      let randomMoney2Amt = Math.floor(Math.random() * 1000);
      let newPerson = new PersonWithMoneyConstructor(randomMoney1Amt, randomMoney2Amt);
      this.peopleWithMoney_list2.push(newPerson);
    }
    
  }

  addMonies(): void{
    for(let i=0; i < this.peopleWithMoney_list1.length; ++i){
      let randomMoney1Amt = Math.floor(Math.random() * 10);
      let randomMoney2Amt = Math.floor(Math.random() * 10);
      this.peopleWithMoney_list1[i].money1 += randomMoney1Amt;
      this.peopleWithMoney_list1[i].money2 += randomMoney2Amt;
    }
  }

  subtractMonies(): void{
    for(let i=0; i < this.peopleWithMoney_list2.length; ++i){
      let randomMoney1Amt = Math.floor(Math.random() * -10);
      let randomMoney2Amt = Math.floor(Math.random() * -10);
      this.peopleWithMoney_list2[i].money1 += randomMoney1Amt;
      this.peopleWithMoney_list2[i].money2 += randomMoney2Amt;
    }
  }

}
