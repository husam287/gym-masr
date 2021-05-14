import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';


import { Hero } from '../shared/models/hero.model';
import { HerosService } from '../shared/services/heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit, OnDestroy {

  heros: Hero[] = [];

  currentElementId: string;
  currentIndex: number;


  _showMenu = false;
  menuXpos: number;
  menuYpos: number;

  filterData: string;
  searchData: string;

  subs1: Subscription;
  constructor(private herosService: HerosService) { }

  ngOnInit(): void {
    //get copy of heros
    this.heros = this.herosService.getAll;

    //Observe deleted index to be deleted from this.heros
    this.subs1 = this.herosService.deletedIndexObservable.subscribe(deletedIndex => {
      this.heros.splice(deletedIndex, 1);
    })
  }

  ngOnDestroy() {
    this.subs1.unsubscribe();
  }

  onRightClick(_id: string, index: number, event: MouseEvent) {
    const screenWidth = event.view.innerWidth;
    const screenHight = event.view.innerHeight;
    let clickedXpos = event.pageX;
    let clickedYpos = event.pageY;
    const menuWidth = environment.optionMenuWidth;
    const menuHight = environment.optionMenuHight;

    if (((menuWidth + clickedXpos) > screenWidth) && ((clickedXpos - menuWidth) < 0))
      clickedXpos -= menuWidth / 2;
    else if ((menuWidth + clickedXpos) > screenWidth)
      clickedXpos -= menuWidth;

    if ((menuHight + clickedYpos) > screenHight) clickedYpos -= menuHight;

    this.showMenu(_id, index, clickedXpos, clickedYpos);
    return false;
  }

  markAttend(index: number, _id: string) {
    this.herosService.makeAttendance(index, _id);
  }

  viewSearchData(event: string) {
    this.searchData = event;
    console.log(event)
  }

  viewFilterData(event: string) {
    this.filterData = event
    console.log(event)
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


