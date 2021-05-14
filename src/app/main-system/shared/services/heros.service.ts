import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateFunctionsService } from 'src/app/shared/services/date-functions.service';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HerosService {
  private heros: Hero[] = [
    new Hero({ _id:'0',attendToday:true, name: 'Hossam Sherif', program: 'monthly', startingDate: new Date('2021-04-17'), endingDate: new Date('2021-07-12'), activeDaysNumber: 14, overtimeDaysNumber: 0 }),
    new Hero({ _id:'1',attendToday:true,name: 'Abdelrahman Sherif', program: 'monthlyPlus', startingDate: new Date('2021-05-1'), endingDate: new Date('2021-06-12'), activeDaysNumber: 7, overtimeDaysNumber: 0 }),
    new Hero({ _id:'2',attendToday:false,name: 'أوتاكا المصري', program: 'daily', startingDate: new Date('2021-05-10'), endingDate: new Date('2021-06-13'), activeDaysNumber: 1, overtimeDaysNumber: 0 }),
    new Hero({ _id:'3',attendToday:false,name: 'Al Kowaa', program: 'monthly', startingDate: new Date('2021-04-10'), endingDate: new Date('2021-05-10'), activeDaysNumber: 18, overtimeDaysNumber: 1 }),
    new Hero({ _id:'4',attendToday:false,name: 'Mohamed', program: 'monthlyPlus', startingDate: new Date('2021-04-10'), endingDate: new Date('2021-05-1'), activeDaysNumber: 18, overtimeDaysNumber: 0 }),

  ]
  constructor(private http: HttpClient,private dateOp:DateFunctionsService) { }

  /**
   * Function that create a new hero
   * @param name name of the hero
   * @param program program type
   * @param startingDate starting date
   */
  async addNewHero(name: string, program: string, startingDate: Date = new Date()) {
    const isMonth = program[0] === 'm' ? true : false;
    let endingDate: Date;

    if (isMonth)
      endingDate = this.addMonth(startingDate);
    else
      endingDate = this.addDay(startingDate);

    const newHero = new Hero({ name, program, startingDate, endingDate })
    console.log(newHero);

    this.heros.push(newHero);
    //await this.http.post().toPromise()

  }

  /**
   * Get copy of heros
   */
  public get getAll(): Hero[] {
    return this.heros.slice();
  }

  /**
   * Mark Attendance of a hero by id
   * @param index To mark in the local array
   * @param _id To mark in the db
   */
  makeAttendance(index:number,_id:string){
    this.heros[index].markAttendance(); //Locally
    //this.http.post('',{});            //in the server
  }
  
  /**
   * To add 1 month to a date
   * @param date starting date
   * @returns new date oof the next month
   */
  private addMonth(date: Date): Date {
    let endDate = new Date(date);
    endDate.setMonth(date.getMonth() + 1);
    return endDate;
  }

  /**
   * To add 1 day to a date
   * @param date starting date
   * @returns new date of the next day
   */
  private addDay(date: Date) {
    let endDate = new Date(date);
    endDate.setDate(date.getDate() + 1);
    return endDate;
  }
}
