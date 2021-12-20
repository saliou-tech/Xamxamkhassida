import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuransoundPageRoutingModule } from './quransound-routing.module';

import { QuransoundPage } from './quransound.page';
import {ListingQuranSoundModule} from '../../components/listing-quran-sound/listing-quran-sound.module';
import {WordpressService} from '../../services/wordpressservices.service';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        QuransoundPageRoutingModule,
        ListingQuranSoundModule
    ],
  declarations: [QuransoundPage],
  providers: [WordpressService,Media]

})
export class QuransoundPageModule {}
