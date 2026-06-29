import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe, UpperCasePipe} from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeFr);

@Component({
  selector: 'app-mod3demo2',
  imports: [
    FormsModule,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './mod3demo2.html',
  styleUrl: './mod3demo2.css',
})
export class Mod3demo2 {

  public user : string;
  public users : string[] // Array<string>
  public date : Date;

  constructor() {
    this.user = '';
    this.users = [];
    this.date = new Date();
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
