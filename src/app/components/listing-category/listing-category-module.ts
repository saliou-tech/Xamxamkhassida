import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ListingCategoryComponent} from './listing-category.component';
import {AcceuilPageRoutingModule} from '../../screens/acceuil/acceuil-routing.module';
import {RouterModule} from "@angular/router";

// @ts-ignore
@NgModule(
  {
    declarations: [ListingCategoryComponent],
    imports: [CommonModule, IonicModule, RouterModule],
    exports: [ListingCategoryComponent],

  }

)
export class ListingCategoryModule{
}
