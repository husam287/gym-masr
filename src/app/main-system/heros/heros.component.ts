import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/models/hero.model';
import { HerosService } from '../shared/services/heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  heros: Hero[]=[];

  constructor(private herosService: HerosService) {}

  ngOnInit(): void {
    this.heros = this.herosService.getAll;
    console.log(this.heros)
  }

}
