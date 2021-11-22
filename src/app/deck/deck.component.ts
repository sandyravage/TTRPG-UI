import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseCard } from '../models/models';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  @Input() set initialDeck(deck: Array<BaseCard>) {
    this.deck = this.shuffle(deck);
  }

  public deck: Array<BaseCard>;

  @Output() cardDrawn = new EventEmitter<BaseCard>();

  constructor() { }

  ngOnInit(): void {

  }

  shuffle(array: Array<BaseCard>) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }  

  drawCard() {
    if(this.deck.length == 0) return;
    this.cardDrawn.emit(this.deck.pop())
  }

}
