import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuranPageRoutingModule } from './quran-routing.module';

import { QuranPage } from './quran.page';
import {HeaderModule} from '../../components/header/header-module';
import {ListingQuranReaderModule} from '../../components/listing-quran-reader/listing-quran-reader-module';
import {WordpressService} from '../../services/wordpressservices.service';
import {Media, MediaObject} from '@ionic-native/media/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuranPageRoutingModule,
    HeaderModule,
    ListingQuranReaderModule
  ],
  declarations: [QuranPage],
  providers: [WordpressService,Media]
})
export class QuranPageModule {

}
