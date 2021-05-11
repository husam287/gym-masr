import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main-system/home/home.component';
import { HerosComponent } from './main-system/heros/heros.component';
import { AddNewHeroComponent } from './main-system/add-new-hero/add-new-hero.component';
import { HeroComponent } from './main-system/heros/hero/hero.component';
import { SidebarModule } from 'ng-sidebar';
import { SidebarListComponent } from './main-system/sidebar-list/sidebar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HerosComponent,
    AddNewHeroComponent,
    HeroComponent,
    SidebarListComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
