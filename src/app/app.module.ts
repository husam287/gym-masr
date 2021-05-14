import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main-system/home/home.component';
import { HerosComponent } from './main-system/heros/heros.component';
import { AddNewHeroComponent } from './main-system/add-new-hero/add-new-hero.component';
import { SidebarModule } from 'ng-sidebar';
import { SidebarListComponent } from './main-system/sidebar-list/sidebar-list.component';
import { FormsModule } from '@angular/forms';
import { AnimatedDigitComponent } from './shared/animated-digit/animated-digit.component';
import { CardComponent } from './main-system/home/card/card.component';
import { LineChartComponent } from './main-system/home/line-chart/line-chart.component';
import { OptionMenuComponent } from './main-system/option-menu/option-menu.component';
import { ModalComponent } from './shared/modal/modal.component';
import { DateSelectorComponent } from './main-system/date-selector/date-selector.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroEditFormComponent } from './main-system/hero-edit-form/hero-edit-form.component';
import { FilterFieldComponent } from './main-system/filter-field/filter-field.component';
import { SearchFieldComponent } from './main-system/search-field/search-field.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HerosComponent,
    AddNewHeroComponent,
    SidebarListComponent,
    AnimatedDigitComponent,
    CardComponent,
    LineChartComponent,
    OptionMenuComponent,
    ModalComponent,
    DateSelectorComponent,
    HeroEditFormComponent,
    FilterFieldComponent,
    SearchFieldComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    SidebarModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
