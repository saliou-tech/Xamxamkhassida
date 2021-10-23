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
        path: '',
        redirectTo: 'acceuil',
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
