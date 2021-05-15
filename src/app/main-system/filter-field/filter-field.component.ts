import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-field',
  templateUrl: './filter-field.component.html',
  styleUrls: ['./filter-field.component.scss']
})
export class FilterFieldComponent implements OnInit,OnDestroy {
  @ViewChild('form',{static:true}) form:NgForm;
  @ViewChild('clearButton',{static:true}) clearButton:ElementRef<HTMLElement>;

  @Output('filterDate') filterDataEmitter:EventEmitter<string> = new EventEmitter();
  @Output('clearButtonRef') clearButtonRef:EventEmitter<ElementRef<HTMLElement>> = new EventEmitter();

  filterInputDate="";

  subs:Subscription;
  constructor() { }

  ngOnInit(): void {
    this.subs = this.form.form.valueChanges.subscribe(filterDate=>{
      this.filterDataEmitter.emit(filterDate.filter);
    })
    this.clearButtonRef.emit(this.clearButton);
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

 

}
