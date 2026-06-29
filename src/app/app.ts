import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Mod1demo1} from './mod1/mod1demo1/mod1demo1';
import {Mod3demo1} from './mod3/mod3demo1/mod3demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mod1demo1, Mod3demo1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursAngularCDA014011');
}
