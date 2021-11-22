import { Component, OnInit } from '@angular/core';
import { BaseCard, Character, Die, SkillCard } from '../models/models';
import * as playerDice from '../../assets/chris-dice.json';
import * as playerDeck from '../../assets/chris-deck.json';
import * as playerSkills from '../../assets/chris-skills.json';
import * as playerEffects from '../../assets/chris-status-effects.json';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public character: Character;

  public hand: Array<BaseCard> = [];

  constructor() { 
    
  }

  ngOnInit(): void {
    let character = new Character();
    let dice = [...(playerDice as any).default];
    let deck = [...(playerDeck as any).default];
    let skills = [...(playerSkills as any).default];
    let effects = [...(playerEffects as any).default];
    character.dice = dice;
    character.deck = deck;
    character.skills = skills;
    character.effects = effects;
    this.character = character;
  }

  handleCard(card: BaseCard) {
    this.hand.push(card);
  }

  handleSkillCard(card: SkillCard)
  {
    let cardName = card.rolls[0].name.split(' ')[0];
    let index = this.character.skills.findIndex(x => x.rolls.some(x => x.name.includes(cardName)));
    this.character.skills[index] = card;
  }

}
