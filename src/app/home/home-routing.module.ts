import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'acceuil',
        loadChildren: () =>
          import('../screens/acceuil/acceuil.module').then(
            (m) => m.AcceuilPageModule
          ),
      },
      {
        path: 'quran',
        loadChildren: () => import('../screens/quran/quran.module').then( (m)=> m.QuranPageModule)
      },
      {
        path: 'quransound',
        loadChildren: () => import('../screens/quransound/quransound.module').then( m => m.QuransoundPageModule)
      },


      {
        path: '',
        redirectTo: 'acceuil',
        pathMatch: 'full',
      },
      {
        path: '',
        redirectTo: 'quran',
        pathMatch: 'full',
      },
      {
        path: '',
        redirectTo: 'quransound',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
