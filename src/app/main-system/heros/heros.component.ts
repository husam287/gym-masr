import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


import { Hero } from '../shared/models/hero.model';
import { HerosService } from '../shared/services/heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  heros: Hero[] = [];

  currentElementId: string;
  _showMenu = false;
  menuXpos: number;
  menuYpos: number;

  constructor(private herosService: HerosService) { }

  ngOnInit(): void {
    this.heros = this.herosService.getAll;
    console.log(this.heros)
  }

  onRightClick(_id: string, event: MouseEvent) {
    console.log(event);
    const screenWidth = event.view.innerWidth;
    const screenHight = event.view.innerHeight;
    let clickedXpos = event.pageX;
    let clickedYpos = event.pageY;
    const menuWidth = environment.optionMenuWidth;
    const menuHight = environment.optionMenuHight;

    if ((menuWidth + clickedXpos) > screenWidth) clickedXpos -= menuWidth;
    if ((menuHight + clickedYpos) > screenHight) clickedYpos -= menuHight;

    this.showMenu(_id, clickedXpos, clickedYpos);
    return false;
  }


  /**
   * function to show and adjust position on the menu
   * @param _id id of the hero
   * @param xPos screen x position 
   * @param yPos screen y position
   */
  private showMenu(_id: string, xPos: number, yPos: number) {
    this._showMenu = true;
    this.currentElementId = _id;
    this.menuXpos = xPos;
    this.menuYpos = yPos;
  }

}


