import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent implements OnInit {

  @Input('sidebar') sidebar:any;
  constructor() { }

  ngOnInit(): void {
  }

  closeSidebar(){
    this.sidebar.close();
  }

}
