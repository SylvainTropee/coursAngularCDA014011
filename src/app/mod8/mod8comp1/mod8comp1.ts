import {Component} from '@angular/core';
import {StoreService} from '../store-service';

@Component({
  selector: 'app-mod8comp1',
  imports: [],
  templateUrl: './mod8comp1.html',
  styleUrl: './mod8comp1.css',
})
export class Mod8comp1 {

  public characters;

  constructor(private storeService: StoreService) {
    this.characters = this.storeService.characters
    // this.storeService.loadCharacters()
  }

}
