import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.scss']
})
export class OptionMenuComponent implements OnInit {
  @Input('_id') _id:string;
  @Input('show') show:boolean;
  @Input('position') position:{'xPos':number,'yPos':number};

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
