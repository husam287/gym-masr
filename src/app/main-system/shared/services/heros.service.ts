import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Hero } from '../models/hero.model';
import * as faker from 'faker'


@Injectable({
  providedIn: 'root'
})
export class HerosService {
  private heros: Hero[] = [
    new Hero({ _id: '0', attendToday: false, name: 'حسام شريف', program: 'daily', startingDate: new Date('2021-05-10'), endingDate: new Date('2021-06-13'), activeDaysNumber: 1, overtimeDaysNumber: 0 }),
  ]

  private deleted_ID = new Subject<string>();

  constructor(private http: HttpClient) { }

  getFakes(){
    faker.locale = "ar";  
    for (let index = 0; index < 100; index++) {
      const name = faker.name.firstName()+' '+faker.name.firstName();
      let pp = ['daily','monthly','monthlyPlus'];
      const rand = Math.floor((Math.random()*3));
      const program = pp[rand];
  
      const _id = Math.floor((Math.random()*10000)).toString();
  
      const startingDate:Date = index%3===0? new Date(faker.date.past()):new Date(faker.date.recent());
      const activeDaysNumber = Math.floor((Math.random()*30));
      const overtimeDaysNumber = (index%5)===0? Math.floor((Math.random()*5)):0;

      this.heros.push(new Hero({name,_id,program,startingDate,activeDaysNumber,overtimeDaysNumber}))
    }
  }

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
    const _id = Math.floor((Math.random()*1000)+12).toString();
    const newHero = new Hero({ name, program, startingDate,_id })
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
      let hasReachedOvertime = element.getHeroInfo.status === 'danger';
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
