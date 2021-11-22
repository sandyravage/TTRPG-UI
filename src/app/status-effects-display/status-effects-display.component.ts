import { Component, Input, OnInit } from '@angular/core';
import { StatusEffect } from '../models/models';

@Component({
  selector: 'app-status-effects-display',
  templateUrl: './status-effects-display.component.html',
  styleUrls: ['./status-effects-display.component.scss']
})
export class StatusEffectsDisplayComponent implements OnInit {

  @Input() statusEffects: Array<StatusEffect>;

  constructor() { }

  ngOnInit(): void {
  }

}
