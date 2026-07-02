import {Component, signal} from '@angular/core';
import {Mod7demo1} from './mod7/mod7demo1/mod7demo1';
import {Mod8comp1} from './mod8/mod8comp1/mod8comp1';
import {Mod8comp2} from './mod8/mod8comp2/mod8comp2';
import {Mod8comp3} from './mod8/mod8comp3/mod8comp3';

@Component({
  selector: 'app-root',
  imports: [Mod7demo1, Mod8comp1, Mod8comp2, Mod8comp3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursAngularCDA014011');
}
