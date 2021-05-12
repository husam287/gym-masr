import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('title') title: string;
  @Input('amount') amount: number;
  @Input('iconClasses') iconClasses: string;
  @Input('money') money: string = null;
  @Input('colorClass') colorClass: string = "bg-primary";

  constructor() { }

  ngOnInit(): void {
  }

}
