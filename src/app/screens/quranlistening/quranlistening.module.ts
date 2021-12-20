import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuranlisteningPageRoutingModule } from './quranlistening-routing.module';

import { QuranlisteningPage } from './quranlistening.page';
import {ListeningquranModule} from "../../components/listeningquran/listeningquran.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        QuranlisteningPageRoutingModule,
        ListeningquranModule
    ],
  declarations: [QuranlisteningPage]
})
export class QuranlisteningPageModule {}
