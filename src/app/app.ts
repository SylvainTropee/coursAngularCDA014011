import {Component, signal} from '@angular/core';
import {Mod7demo1} from './mod7/mod7demo1/mod7demo1';

@Component({
  selector: 'app-root',
  imports: [Mod7demo1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursAngularCDA014011');
}
