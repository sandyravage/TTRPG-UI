import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseCard, SkillCard } from '../models/models';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  @Input() hand: Array<BaseCard>;

  @Output() handChanged = new EventEmitter<Array<BaseCard>>();
  
  @Output() skillCardPlayed = new EventEmitter<SkillCard>();

  constructor() { }

  ngOnInit(): void {

  }

  discard(index: number) {
    let chosenCard = this.hand.splice(index, 1)[0];
    if((chosenCard as SkillCard).rolls) {
      this.skillCardPlayed.emit(chosenCard as SkillCard);
    }
    this.handChanged.emit(this.hand);
  }

}
