import { Component, Input, OnInit } from '@angular/core';
import { Die } from '../models/models';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {

  @Input() set playerDice(input: Die[]) {
    this.currentDice = input.map(x => {return {...x, held: false}});
  }

  public currentDice: Array<Die>;

  constructor() { }

  ngOnInit(): void {

  }

  roll() {
    let newDice = this.currentDice.filter(x => x.held == true);
    let remaining = this.currentDice.length - newDice.length;
    for (let index = 0; index < remaining; index++) {
      newDice.push(new Die(this.getDieValue()))
    }
    this.currentDice = newDice;
  }

  getDieValue() {
    return Math.floor((Math.random() * 6) + 1);
  }

  toggleHeld(index: number) {
    this.currentDice[index].held = !this.currentDice[index].held;
  }

}
