import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuransoundPage } from './quransound.page';


const routes: Routes = [
  {
    path: '',
    component: QuransoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuransoundPageRoutingModule {}
