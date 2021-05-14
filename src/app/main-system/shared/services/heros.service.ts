import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DateFunctionsService } from 'src/app/shared/services/date-functions.service';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HerosService {
  private heros: Hero[] = [
    new Hero({ _id: '0', attendToday: true, name: 'Hossam Sherif', program: 'monthly', startingDate: new Date('2021-04-17'), endingDate: new Date('2021-07-12'), activeDaysNumber: 14, overtimeDaysNumber: 0 }),
    new Hero({ _id: '1', attendToday: true, name: 'Abdelrahman Sherif', program: 'monthlyPlus', startingDate: new Date('2021-05-1'), endingDate: new Date('2021-06-12'), activeDaysNumber: 7, overtimeDaysNumber: 0 }),
    new Hero({ _id: '2', attendToday: false, name: 'أوتاكا المصري', program: 'daily', startingDate: new Date('2021-05-10'), endingDate: new Date('2021-06-13'), activeDaysNumber: 1, overtimeDaysNumber: 0 }),
    new Hero({ _id: '3', attendToday: false, name: 'Al Kowaa', program: 'monthly', startingDate: new Date('2021-04-10'), endingDate: new Date('2021-05-10'), activeDaysNumber: 18, overtimeDaysNumber: 1 }),
    new Hero({ _id: '4', attendToday: false, name: 'Mohamed', program: 'monthlyPlus', startingDate: new Date('2021-04-10'), endingDate: new Date('2021-05-1'), activeDaysNumber: 18, overtimeDaysNumber: 0 }),
  ]

  private deletedIndex = new Subject<number>();

  constructor(private http: HttpClient) { }

  /**
   * Get copy of heros
   */
  public get getAll(): Hero[] {
    //get from serve
    //this.http.get()

    return this.heros.slice();
  }

  /**
   * Get deleted index observable
   */
  public get deletedIndexObservable() : Subject<number> {
    return this.deletedIndex;
  }
  

  /**
   * Function that create a new hero
   * @param name name of the hero
   * @param program program type
   * @param startingDate starting date
   */
  async addNewHero(name: string, program: string, startingDate: Date = new Date()) {

    const newHero = new Hero({ name, program, startingDate})
    console.log(newHero);

    this.heros.push(newHero); //locally

    //in the server
    //await this.http.post().toPromise()

  }

  /**
   * Mark Attendance of a hero by id
   * @param index To mark in the local array
   * @param _id To mark in the db
   */
  makeAttendance(index: number, _id: string) {
    this.heros[index].markAttendance(); //Locally
    //this.http.post('',{});            //in the server
  }

  /**
   * edit hero info
   * @param input info object
   */
  editHero(input: { index: number, _id: string, name: string, program: string }) {
    //Locally
    this.heros[input.index].name = input.name;
    this.heros[input.index].program = input.program;

    console.log(this.heros[input.index].getHeroInfo)
    //In the server
    //this.http.put(url,{})
  }

  renewSubscription(index:number,_id:string,startingDate:Date){
    this.heros[index].startingDate = startingDate;
    this.heros[index].clearFlags();
    
    console.log(this.heros[index].getHeroInfo.startingDate);
    //into server
    //this.http.post()
  }

  deleteHero(index:number,_id:string){
    this.heros.splice(index,1); //delete locally
    this.deletedIndex.next(index);
    console.log("deleted")

    //delete from server
    //this.http.delete()
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

  private initEndingTime(startingDate: Date, program: string): Date {
    const isMonth = program[0] === 'm' ? true : false;
    let endingDate: Date;

    if (isMonth)
      return endingDate = this.addMonth(startingDate);
    else
      return endingDate = this.addDay(startingDate);
  }
}
