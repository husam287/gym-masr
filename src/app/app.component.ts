import { Component, OnInit } from '@angular/core';
import * as faker from 'faker'
import { HerosService } from './main-system/shared/services/heros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gym-masr';
  _opened: boolean = true;

  constructor(private heroService:HerosService){}

  ngOnInit(){
    this.heroService.getFakes();
  }
 
  _toggleSidebar() {
    this._opened = !this._opened;
  }


}
