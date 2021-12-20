import {AcceuilPageRoutingModule} from '../../screens/acceuil/acceuil-routing.module';
import {RouterModule} from '@angular/router';
import {ListingQuranReaderComponent} from './listing-quran-reader.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MatCardModule} from '@angular/material/card';

// @ts-ignore
@NgModule(
  {
    declarations: [ListingQuranReaderComponent],
      imports: [CommonModule, IonicModule, RouterModule, MatCardModule],
    exports: [ListingQuranReaderComponent],

  }

)
export class ListingQuranReaderModule{
}
