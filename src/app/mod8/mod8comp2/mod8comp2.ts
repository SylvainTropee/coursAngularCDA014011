import { Component } from '@angular/core';
import {StoreService} from '../store-service';

@Component({
  selector: 'app-mod8comp2',
  imports: [],
  templateUrl: './mod8comp2.html',
  styleUrl: './mod8comp2.css',
})
export class Mod8comp2 {

    constructor(private storeService : StoreService) {
    }

    public load(){
      this.storeService.loadCharacters()
    }

}
