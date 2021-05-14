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
  @Output('filterDate') filterData:EventEmitter<string> = new EventEmitter();

  subs:Subscription;
  constructor() { }

  ngOnInit(): void {
    this.subs = this.form.form.valueChanges.subscribe(filterDate=>{
      this.filterData.emit(filterDate);
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

 

}
