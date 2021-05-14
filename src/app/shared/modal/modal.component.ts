import { Component, ElementRef, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hero } from 'src/app/main-system/shared/models/hero.model';
import { HerosService } from 'src/app/main-system/shared/services/heros.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output('openButton') openButton: EventEmitter<ElementRef<HTMLElement>> = new EventEmitter();

  @Input('header') header: string;
  @Input('type') type: string = "dark";
  @Input('heroIndex') heroIndex: number;
  @Input('hero') hero: Hero = null;
  @Input('body') body: string = null;
  @Input('purpose') purpose: string = null;
  @Input('actionButton') actionButton: string = 'ok';

  @ViewChild('openButtonRef', { static: true }) openButtonRef: ElementRef<HTMLElement>;

  selectedDate: Date;
  editedHero: { name: string, program: string };
  constructor(private modalService: NgbModal, private heroServices: HerosService) { }

  ngOnInit(): void {
    this.openButton.emit(this.openButtonRef);
  }

  ngOnDestroy() {
  }

  open(content) {
    this.selectedDate = null;
    this.editedHero = { name: this.hero.getHeroInfo.name, program: this.hero.getHeroInfo.program };
    this.modalService.open(content).result.then().catch(reason => console.log(reason));
  }



  preventRightClick() {
    return false;
  }

  onSelectDate(selectedDate: Date) {
    this.selectedDate = selectedDate;
  }
  onEditHero(editedHero: any) {
    this.editedHero.name = editedHero.name;
    this.editedHero.program = editedHero.program;
  }

  onSubmit(modal) {
    if (!this.selectedDate && this.purpose === 'renew') this.selectedDate = this.hero.getHeroInfo.endingDate;

    if (this.purpose === 'edit') {
      this.heroServices.editHero({
        index: this.heroIndex,
        _id: this.hero.getHeroInfo._id,
        name: this.editedHero.name,
        program: this.editedHero.program,
      })
    }
    else if(this.purpose === 'renew'){
      this.heroServices.renewSubscription(this.heroIndex,this.hero.getHeroInfo._id,this.selectedDate);
    }
    
    modal.close();
  }






}
