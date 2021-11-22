import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarMapComponent } from './starmap/starmap/starmap.component';
import { StarmapAdminComponent } from './starmap/starmap-admin/starmap-admin.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { LifePointsCounterComponent } from './life-points-counter/life-points-counter.component';
import { CommandPointsCounterComponent } from './command-points-counter/command-points-counter.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { CommandCardComponent } from './command-card/command-card.component';
import { HandComponent } from './hand/hand.component';
import { DeckComponent } from './deck/deck.component';
import { SkillDisplayComponent } from './skill-display/skill-display.component';
import { StatusEffectsDisplayComponent } from './status-effects-display/status-effects-display.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    StarMapComponent,
    StarmapAdminComponent,
    MainPageComponent,
    DiceRollerComponent,
    LifePointsCounterComponent,
    CommandPointsCounterComponent,
    SkillCardComponent,
    CommandCardComponent,
    HandComponent,
    DeckComponent,
    SkillDisplayComponent,
    StatusEffectsDisplayComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
