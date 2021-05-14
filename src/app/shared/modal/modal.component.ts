import { Component, ComponentRef, ElementRef, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Hero } from 'src/app/main-system/shared/models/hero.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output('openButton') openButton: EventEmitter<ElementRef<HTMLElement>> = new EventEmitter();

  @ViewChild('open', { static: true }) open: ElementRef<HTMLElement>;
  @ViewChild('close') close: ElementRef<HTMLElement>;

  @Input('header') header: string;
  @Input('type') type: string = "";
  @Input('hero') hero: Hero = null;
  @Input('body') body: string = null;
  @Input('purpose') purpose: string = null;
  @Input('actionButton') actionButton: string = 'ok';


  selectedDate = new Date();
  constructor() { }

  ngOnInit(): void {
    this.openButton.emit(this.open);
    this.openButton.unsubscribe();
  }
  ngOnDestroy() {
    this.close.nativeElement.click()
  }

  preventRightClick() {
    return false;
  }

  onSelectDate(selectedDate: Date) {
    this.selectedDate = selectedDate;
  } 

  onSubmit(){
    console.log(this.selectedDate);

    this.close.nativeElement.click();
  }
  
 
  



}
