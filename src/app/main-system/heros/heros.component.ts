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
  currentIndex: number;
  _showMenu = false;
  menuXpos: number;
  menuYpos: number;

  constructor(private herosService: HerosService) { }

  ngOnInit(): void {
    this.heros = this.herosService.getAll;
  }

  onRightClick(_id: string, index: number, event: MouseEvent) {
    const screenWidth = event.view.innerWidth;
    const screenHight = event.view.innerHeight;
    let clickedXpos = event.pageX;
    let clickedYpos = event.pageY;
    const menuWidth = environment.optionMenuWidth;
    const menuHight = environment.optionMenuHight;

    if (((menuWidth + clickedXpos) > screenWidth) && ((clickedXpos-menuWidth) < 0))
      clickedXpos -= menuWidth/2;
    else if ((menuWidth + clickedXpos) > screenWidth) 
      clickedXpos -= menuWidth;

    if ((menuHight + clickedYpos) > screenHight) clickedYpos -= menuHight;

    this.showMenu(_id, index, clickedXpos, clickedYpos);
    return false;
  }

  markAttend(index:number,_id:string){
    this.herosService.makeAttendance(index,_id);
  }

  


  /**
   * function to show and adjust position on the menu
   * @param index id of the hero
   * @param xPos screen x position 
   * @param yPos screen y position
   */
  private showMenu(_id: string, index: number, xPos: number, yPos: number) {
    this._showMenu = true;
    this.currentIndex = index;
    this.currentElementId = _id;
    this.menuXpos = xPos;
    this.menuYpos = yPos;
  }

}


