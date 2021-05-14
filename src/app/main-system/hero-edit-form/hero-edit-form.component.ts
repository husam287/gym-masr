import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DateFunctionsService } from 'src/app/shared/services/date-functions.service';
import { Hero } from '../shared/models/hero.model';
import { HerosService } from '../shared/services/heros.service';

@Component({
  selector: 'app-hero-edit-form',
  templateUrl: './hero-edit-form.component.html',
  styleUrls: ['./hero-edit-form.component.scss']
})
export class HeroEditFormComponent implements OnInit {

  @ViewChild('form', { static: true }) form: NgForm;

  @Input('hero') hero: Hero;

  @Output('editedHero') editedHero: EventEmitter<any> = new EventEmitter();


  constructor(private dateFunctions: DateFunctionsService) { }

  ngOnInit(): void {
    this.form.form.valueChanges.subscribe(result => {
      if (result.program && result.name)
        this.editedHero.emit(result);
    })
  }





}
