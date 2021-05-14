import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateFunctionsService } from 'src/app/shared/services/date-functions.service';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit {

  //today date with object format
  @Input('initDate') date = new Date();
  @Input('label') label: string = 'Starting Date:'
  @Output('date') dateToSubmit: EventEmitter<Date> = new EventEmitter();

  constructor(private dateOp: DateFunctionsService) { }

  ngOnInit(): void { }

  onDateSelect(event) {
    this.dateToSubmit.emit(this.dateOp.toJsDateFormat(event));
  }

  


}


