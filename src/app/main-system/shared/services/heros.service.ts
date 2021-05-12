import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HerosService {
  private heros: Hero[] = [
    new Hero({ name: 'Hossam Sherif', program: 'monthly', startingDate: new Date(), endingDate: new Date('2021-07-12'), activeDaysNumber: 14, overtimeDaysNumber: 0 }),
    new Hero({ name: 'Abdelrahman Sherif', program: 'monthlyPlus', startingDate: new Date(), endingDate: new Date('2021-06-12'), activeDaysNumber: 7, overtimeDaysNumber: 0 }),
    new Hero({ name: 'أوتاكا المصري', program: 'daily', startingDate: new Date(), endingDate: new Date('2021-06-13'), activeDaysNumber: 1, overtimeDaysNumber: 0 }),
    new Hero({ name: 'Al Kowaa', program: 'monthly', startingDate: new Date(), endingDate: new Date('2021-05-10'), activeDaysNumber: 18, overtimeDaysNumber: 1 }),
    new Hero({ name: 'Mohamed', program: 'monthlyPlus', startingDate: new Date('2021-04-10'), endingDate: new Date('2021-05-1'), activeDaysNumber: 18, overtimeDaysNumber: 0 }),

  ]
  constructor(private http: HttpClient) { }

  async addNewHero(name: string, program: string) {
    //await this.http.post().toPromise()
  }


  public get getAll(): Hero[] {
    return this.heros.slice();
  }

}
