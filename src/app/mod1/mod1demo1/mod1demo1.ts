import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mod1demo1',
  imports: [],
  templateUrl: './mod1demo1.html',
  styleUrl: './mod1demo1.css',
})
export class Mod1demo1 implements OnInit, AfterViewInit{

  public name? : string;

  constructor() {
    // this.name = 'Michel';
    // this.changeName();
  }

  ngAfterViewInit(): void {
    console.log("Vue chargée")
    }

  public changeName(){
    this.name = 'Superman';
  }

  ngOnInit(){
    this.name = 'Michel';
    console.log("initisalition des attributs")
  }


}
