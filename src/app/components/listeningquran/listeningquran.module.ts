import {AcceuilPageRoutingModule} from '../../screens/acceuil/acceuil-routing.module';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MatCardModule} from '@angular/material/card';
import {ListeningquranComponent} from "./listeningquran.component";
// @ts-ignore


// @ts-ignore
@NgModule(
  {
    declarations: [ListeningquranComponent],
    imports: [CommonModule, IonicModule, RouterModule, MatCardModule],
    exports: [ListeningquranComponent],

  }

)
export class ListeningquranModule{
}
