import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-hero',
  templateUrl: './add-new-hero.component.html',
  styleUrls: ['./add-new-hero.component.scss']
})
export class AddNewHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.form.value);
    
  }

}
