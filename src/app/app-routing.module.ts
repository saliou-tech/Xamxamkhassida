import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./screens/acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'quran',
    loadChildren: () => import('./screens/quran/quran.module').then( m => m.QuranPageModule)
  },
  {
    path: 'quransound',
    loadChildren: () => import('./screens/quransound/quransound.module').then( m => m.QuransoundPageModule)
  },
  {
    path: 'quranlistening',
    loadChildren: () => import('./screens/quranlistening/quranlistening.module').then( m => m.QuranlisteningPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
