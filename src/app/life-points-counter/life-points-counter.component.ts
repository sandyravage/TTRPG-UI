import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-points-counter',
  templateUrl: './life-points-counter.component.html',
  styleUrls: ['./life-points-counter.component.scss']
})
export class LifePointsCounterComponent implements OnInit {

  public lifePoints: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  modifyLifePoints(input: number) {
    this.lifePoints += input;
  }

  reset() {
    this.lifePoints = 50;
  }

}
