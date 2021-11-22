import { Component, Input, OnInit } from '@angular/core';
import { Die, RollEffect } from '../models/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cost: number;
  @Input() name: string;
  @Input() effect: string;
  @Input() phase: string;
  @Input() rolls: Array<RollEffect>;

  constructor() { }

  ngOnInit(): void {
  }

  parseRoll(dice: Array<Die>): string {
    return dice.map(x => x.value).join(', ');
  }

}
