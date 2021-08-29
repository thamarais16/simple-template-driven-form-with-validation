import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit, AfterViewInit {
  
  public country: Country[] = [
    new Country('1', 'Great Britain'),
    new Country('2', 'India'),
    new Country('3', 'USA'),
    new Country('4', 'England')
  ];

  public contact: Contact = {
    firstName: "Thamarai",
    lastName: "selvan",
    email: "thamarai@gmail.com",
    gender: "male",
    isMarried: false,
    country: "1",
    address: {
      city:"chennai",
      street:"omr",
      pincode:"600096"
    }
  };

  @ViewChild('contactForm') public contactForm: NgForm;

  constructor() { }

  ngOnInit() {
  } 

  ngAfterViewInit(){
    setTimeout(()=>{
      this.contactForm.setValue(this.contact);
      this.contactForm.controls['firstName'].patchValue("THAMS");
    },1000);
    
  }


  onSubmit(form){
    console.log(form.value);
  }

}

export class Contact{
  firstName: string;
  lastName: string; 
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city:string;
    street:string;
    pincode:string;
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