import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-mod5home',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './mod5home.html',
  styleUrl: './mod5home.css',
})
export class Mod5home {

  public about : string = "/about"

  constructor(private router : Router) {
  }

  public goToAbout(){
    this.router.navigateByUrl("/about")
  }


}
