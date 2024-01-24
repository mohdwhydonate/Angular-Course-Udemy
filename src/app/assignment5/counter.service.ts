import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activetoinactiveCounter = 0;
  inactivetoactiveCounter = 0;

  IncrementActToInAct() {
    this.activetoinactiveCounter++;
    console.log('Active to Inactive', this.activetoinactiveCounter);
  }
  DecrementActToInAct() {
    this.inactivetoactiveCounter++;
    console.log('Inactive to Active', this.inactivetoactiveCounter);
  }

  constructor() {}
}
