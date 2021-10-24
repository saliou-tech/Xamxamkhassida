import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceuilPageRoutingModule } from './acceuil-routing.module';

import { AcceuilPage } from './acceuil.page';
import {ListingCategoryModule} from '../../components/listing-category/listing-category-module';
import {HeaderModule} from '../../components/header/header-module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilPageRoutingModule,
    ListingCategoryModule,
    HeaderModule
  ],
  exports: [
    AcceuilPage
  ],
  declarations: [AcceuilPage]
})
export class AcceuilPageModule {}
