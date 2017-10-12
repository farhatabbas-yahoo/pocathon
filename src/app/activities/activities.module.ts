import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { GamesComponent } from './games/games.component';

import { CapitalizePipe } from '../pipes/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HobbiesComponent, GamesComponent]
})
export class ActivitiesModule { }
