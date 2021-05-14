import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFunctionsService {

  constructor() { }

  toJsDateFormat(date) {
    return new Date(`${date.year}/${date.month}/${date.day}`)
  }

  toDateObject(date: Date) {
    const dataObj = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    }
    return dataObj;
  }
}
