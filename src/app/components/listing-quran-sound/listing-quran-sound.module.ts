import {AcceuilPageRoutingModule} from '../../screens/acceuil/acceuil-routing.module';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MatCardModule} from '@angular/material/card';
import {ListingQuranSoundComponent} from './listing-quran-sound.component';
// @ts-ignore


// @ts-ignore
@NgModule(
  {
    declarations: [ListingQuranSoundComponent],
    imports: [CommonModule, IonicModule, RouterModule, MatCardModule],
    exports: [ListingQuranSoundComponent],

  }

)
export class ListingQuranSoundModule{
}
