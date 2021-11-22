import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-points-counter',
  templateUrl: './command-points-counter.component.html',
  styleUrls: ['./command-points-counter.component.scss']
})
export class CommandPointsCounterComponent implements OnInit {

  public commandPoints: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  modifyCommandPoints(input: number) {
    this.commandPoints += input;
  }

  reset() {
    this.commandPoints = 2;
  }
}
