import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit, OnDestroy {
  @Output('searchData') searchDate: EventEmitter<string> = new EventEmitter();
  @Output('clearButtonRef') clearButtonRef: EventEmitter<ElementRef<HTMLElement>>=new EventEmitter();

  @ViewChild('form', { static: true }) form: NgForm;

  @ViewChild('searchInputRef') searchInputRef: ElementRef<HTMLInputElement>
  @ViewChild('clearButton', { static: true }) clearButton: ElementRef<HTMLElement>;
  searchInputData = "";

  showsearch = false;

  subs: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.subs = this.form.form.valueChanges.subscribe(searchDate => this.searchDate.emit(searchDate.search))
    this.clearButtonRef.emit(this.clearButton);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  showSearchInput() {
    if (this.showsearch) this.searchInputData = '';
    this.showsearch = !this.showsearch;
    this.searchInputRef.nativeElement.classList.remove('d-none')
    if(!this.searchInputData)
      this.searchInputRef.nativeElement.focus();
  }



}
