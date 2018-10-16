import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address
  hobbies:string[];
  constructor() {
    console.log('constructor ran..')
   }

  ngOnInit() {
    console.log('ngOnInit ran...ngOnInit ran')

    this.name = 'AMR ATA';
    this.age = 23;
    this.email = 'amradelata@gmil.com';
    this.address = {
      street:'50main st',
      city:'Boston',
      state:'ma'
    }
    this.hobbies = ['write code', 'watch movies', 'listen to music']
  }

  onClick(){
    this.name='amr adel ata';
    this.hobbies.push('New Hobby');
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby)
    return false;
  }

  deletHobby(hobby){
    for(let i = 0;i< this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address{
  street:string;
  city:string;
  state:string;
}