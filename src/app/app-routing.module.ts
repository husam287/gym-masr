import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AddNewHeroComponent } from './main-system/add-new-hero/add-new-hero.component';
import { HerosComponent } from './main-system/heros/heros.component';
import { HomeComponent } from './main-system/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'heros',
    component:HerosComponent
  },
  {
    path:'add-hero',
    component:AddNewHeroComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path : '**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
