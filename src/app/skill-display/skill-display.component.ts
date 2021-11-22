import { Component, Input, OnInit } from '@angular/core';
import { SkillCard } from '../models/models';

@Component({
  selector: 'app-skill-display',
  templateUrl: './skill-display.component.html',
  styleUrls: ['./skill-display.component.scss']
})
export class SkillDisplayComponent implements OnInit {

  @Input() skills: Array<SkillCard>;

  constructor() { }

  ngOnInit(): void {
  }

}
