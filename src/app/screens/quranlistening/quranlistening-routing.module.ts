import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuranlisteningPage } from './quranlistening.page';

const routes: Routes = [
  {
    path: '',
    component: QuranlisteningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuranlisteningPageRoutingModule {}
