import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mod3demo2',
  imports: [
    FormsModule
  ],
  templateUrl: './mod3demo2.html',
  styleUrl: './mod3demo2.css',
})
export class Mod3demo2 {

  public user : string;
  public users : string[] // Array<string>

  constructor() {
    this.user = '';
    this.users = [];
  }

  public addUser(){
    if(this.user){
      this.users.push(this.user);
      this.user = '';
    }
  }

  public removeUser(index : number){
      this.users.splice(index, 1);
  }

}
