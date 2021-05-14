import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../shared/models/hero.model';

@Component({
  selector: 'app-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.scss']
})
export class OptionMenuComponent implements OnInit {
  @Input('hero') hero: Hero;
  @Input('index') index: number;
  @Input('show') show: boolean;
  @Input('position') position: { 'xPos': number, 'yPos': number };

  modalButton: ElementRef<HTMLElement>;
  typeOfModal: string;
  headerOfModal: string;
  bodyOfModal: string;
  actionButtonString: string;
  purposeOfModal: string;




  constructor() { }

  ngOnInit(): void {
  }

  onRenew() {
    this.openModal({
      type: 'success',
      header: `Renew Subscription`,
      body: `Renew (${this.hero.getHeroInfo.name})'s subscription`,
      buttonString: 'Renew',
      purpose:'renew'
    });
  }

  onDelete() {
    this.openModal({
      type: 'danger',
      header: `Warning`,
      body: `Are you sure to delete (${this.hero.getHeroInfo.name}) permentally!!`,
      buttonString: 'YES',
      purpose:'delete'
    });

  }

  onEdit() {
    this.openModal({
      type: '',
      header: `Edit`,
      body: `Edit (${this.hero.getHeroInfo.name})'s info`,
      buttonString: 'Save',
      purpose:'edit'
    });
  }

  showEvent(event: ElementRef<HTMLElement>) {
    this.modalButton = event;
  }

  private openModal(input: { type: string, header: string, body?: string, buttonString?: string, purpose?: string }) {
    this.typeOfModal = input.type;
    this.headerOfModal = input.header;
    this.bodyOfModal = input.body;
    this.actionButtonString = input.buttonString;
    this.purposeOfModal=input.purpose;

    this.modalButton.nativeElement.click();
  }
}
