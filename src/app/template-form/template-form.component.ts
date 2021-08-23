import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  public country: Country[] = [
    new Country('1', 'Great Britain'),
    new Country('2', 'India'),
    new Country('3', 'USA'),
    new Country('4', 'England')
  ];
  constructor() { }

  ngOnInit() {
  } 

  onSubmit(form){
    console.log(form.value);
  }

}

export class Country{
  id: string;
  name: string;

  constructor(id: string, name: string){
    this.id = id;
    this.name = name;
  }
}