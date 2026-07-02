import {ChangeDetectorRef, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Api} from '../api';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-mod7demo1',
  imports: [
    AsyncPipe
  ],
  templateUrl: './mod7demo1.html',
  styleUrl: './mod7demo1.css',
})
export class Mod7demo1 {

  public harry : any
  public harry2 : Observable<any>

  constructor(private harryApi : Api, private cdr : ChangeDetectorRef) {

    this.harryApi.getHarryPotter().subscribe(
      (value) => {
        this.harry = value[0]
        console.log(value[0])
        // this.cdr.detectChanges()
      }
    );

    this.harry2 = this.harryApi.getHarryPotter()


    // const observable = new Observable(
    //   subscriber => {
    //     subscriber.next("Coucou")
    //     subscriber.next(456)
    //     subscriber.next("C'est moi michel !")
    //     subscriber.complete()
    //   }
    // )
    // observable.subscribe(
    //   (value) => console.log(value)
    // )

  }

}
