import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
   children:[
  {
    path: 'users',
    loadChildren: () => import('../users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'search/:id',
    loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
  },
]
}, 
{
  path: '**',
  redirectTo: 'home/users',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
