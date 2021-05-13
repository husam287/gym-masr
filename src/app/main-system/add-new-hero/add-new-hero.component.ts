import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HerosService } from '../shared/services/heros.service';

@Component({
  selector: 'app-add-new-hero',
  templateUrl: './add-new-hero.component.html',
  styleUrls: ['./add-new-hero.component.scss']
})
export class AddNewHeroComponent implements OnInit {

  constructor(private herosService:HerosService) { }

  ngOnInit(): void {
  }

  //{name,program}
  onSubmit(form:NgForm){
    const {name,program} = form.form.value;
    this.herosService.addNewHero(name,program,new Date(Date.now()));
    form.resetForm({name:'',program:''});  
  }

}
