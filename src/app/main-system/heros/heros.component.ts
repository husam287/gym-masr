import {Component, OnInit } from '@angular/core';


import { Hero } from '../shared/models/hero.model';
import { HerosService } from '../shared/services/heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  heros: Hero[] = [];
  
  currentElementId:string;
  _showMenu=false;
  menuXpos:number;
  menuYpos:number;
 
  constructor(private herosService: HerosService) { }

  ngOnInit(): void {
    this.heros = this.herosService.getAll;
    console.log(this.heros)
  }

  onRightClick(_id: string, event: MouseEvent) {
    console.log(event);
    this.showMenu(_id,event.pageX,event.pageY);
    return false;
  }
  
  
  /**
   * function to show and adjust position on the menu
   * @param _id id of the hero
   * @param xPos screen x position 
   * @param yPos screen y position
   */
  private showMenu(_id: string, xPos: number, yPos: number) {
    this._showMenu=true;
    this.currentElementId=_id;
    this.menuXpos = xPos;
    this.menuYpos = yPos;
  }

}


