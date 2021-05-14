import { Component, ElementRef, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hero } from 'src/app/main-system/shared/models/hero.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output('openButton') openButton: EventEmitter<ElementRef<HTMLElement>> = new EventEmitter();

  @Input('header') header: string;
  @Input('type') type: string = "dark";
  @Input('hero') hero: Hero = null;
  @Input('body') body: string = null;
  @Input('purpose') purpose: string = null;
  @Input('actionButton') actionButton: string = 'ok';
  
  @ViewChild('openButtonRef',{static:true}) openButtonRef:ElementRef<HTMLElement>;

  selectedDate:Date;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.openButton.emit(this.openButtonRef);
  }

  ngOnDestroy() {
  }

  open(content) {
    this.selectedDate=null;
    this.modalService.open(content).result.then().catch(reason=>console.log(reason));
  }
 


  preventRightClick() {
    return false;
  }

  onSelectDate(selectedDate: Date) {
    this.selectedDate = selectedDate;
  } 

  onSubmit(modal){
    if(!this.selectedDate && this.purpose==='renew') this.selectedDate=new Date();
    if(!this.selectedDate && this.purpose==='edit') this.selectedDate=this.hero.getHeroInfo.startingDate;

    console.log(this.selectedDate);
    modal.close();
  }
  
 
  



}
