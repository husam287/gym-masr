import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
    new Hero({ _id: '11', attendToday: false, name: 'Mohamed', program: 'monthlyPlus', startingDate: new Date('2021-04-10'), endingDate: new Date('2021-05-1'), activeDaysNumber: 18, overtimeDaysNumber: 0 }),
  ]

  private deleted_ID = new Subject<string>();

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
  public get deletedIndexObservable(): Subject<string> {
    return this.deleted_ID;
  }


  /**
   * Function that create a new hero
   * @param name name of the hero
   * @param program program type
   * @param startingDate starting date
   */
  async addNewHero(name: string, program: string, startingDate: Date = new Date()) {
    const newHero = new Hero({ name, program, startingDate })
    console.log(newHero);

    this.heros.push(newHero); //locally

    //in the server
    //await this.http.post().toPromise()

  }

  /**
   * Mark Attendance of a hero by id
   * @param _id To mark in the db
   */
  makeAttendance(_id: string) {
    const index = this.heros.findIndex(element => element.getHeroInfo._id === _id);
    console.log(index)
    this.heros[index].markAttendance(); //Locally
    //this.http.post('',{});            //in the server
  }

  /**
   * edit hero info
   * @param input info object
   */
  editHero(input: { _id: string, name: string, program: string }) {
    const index = this.heros.findIndex(element => element.getHeroInfo._id === input._id);
    //Locally
    this.heros[index].name = input.name;
    this.heros[index].program = input.program;

    console.log(this.heros[index].getHeroInfo)
    //In the server
    //this.http.put(url,{})
  }

  /**
   * to renew the subscription of a hero
   * @param _id id of hero
   * @param startingDate starting date
   */
  renewSubscription(_id: string, startingDate: Date) {
    const index = this.heros.findIndex(element => element.getHeroInfo._id === _id );
    this.heros[index].startingDate = startingDate;
    this.heros[index].clearFlags();

    console.log(this.heros[index].getHeroInfo.startingDate);
    //into server
    //this.http.post()
  }

  /**
   * function to delete from local array and from db
   * @param _id id of deleted item
   */
  deleteHero(_id: string) {
    const index = this.heros.findIndex(element => element.getHeroInfo._id === _id );
    this.heros.splice(index, 1); //delete locally
    this.deleted_ID.next(_id);
    console.log("deleted")

    //delete from server
    //this.http.delete()
  }




  //###########################################
  //############ Search And Filter ############
  //###########################################
  /**
   * Search by name or id
   * @param item Item to be searched
   * @returns Filtered array of names | Array of one _id
   */
  search(item: string) {
    return this.heros.filter(element => {
      let isMatch =
        element.getHeroInfo.name.toLowerCase().match(item.toLowerCase()) ||
        element.getHeroInfo._id.toLowerCase().match(item.toLowerCase())

      if (isMatch)
        return true;
    });
  }

  /**
   * Filter the heros with respect to a key
   * @param filterKey filter key; how to be filtered
   * @returns Filter array of heros
   */
  filter(filterKey: string) {
    const keys = ['overtime', 'inactive'];

    switch (filterKey) {
      case keys[0]:

        return this._filter_overtime();

      case keys[1]:

        return this._filter_inactive();

      default:
        return this.heros.slice();
    }
  }


  // Filtering helping functions
  private _filter_overtime() {
    return this.heros.filter(element => {
      let hasReachedOvertime = element.getHeroInfo.overtimeDaysNumber > 0;
      return hasReachedOvertime;
    })
  }
  private _filter_inactive() {
    return this.heros.filter(element => {
      let isInactive = element.getHeroInfo.status === 'inactive';
      return isInactive;
    })
  }







}
