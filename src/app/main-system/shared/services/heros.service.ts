import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(private http:HttpClient) { }

  async addNewHero(name:string,program:string){
    //await this.http.post().toPromise()
  }
}
