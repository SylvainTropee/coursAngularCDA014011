import { Component } from '@angular/core';
import {StoreService} from '../store-service';

@Component({
  selector: 'app-mod8comp3',
  imports: [],
  templateUrl: './mod8comp3.html',
  styleUrl: './mod8comp3.css',
})
export class Mod8comp3 {

    public nbCharacter;

    constructor(private storeService : StoreService) {
      this.nbCharacter = this.storeService.nbCharacters
    }

}
