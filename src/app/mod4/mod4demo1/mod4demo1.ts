import { Component } from '@angular/core';
import {AuthService} from '../auth-service';

@Component({
  selector: 'app-mod4demo1',
  imports: [],
  templateUrl: './mod4demo1.html',
  styleUrl: './mod4demo1.css',
})
export class Mod4demo1 {

  public username : string;

  constructor(private auth : AuthService) {
    this.username = this.auth.getUsername();
  }

  public login(){
    this.auth.login();
    this.username = this.auth.getUsername();
  }

  public logout(){
    this.auth.logout();
    this.username = '';
  }

}
