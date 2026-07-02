import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {


  constructor(private http: HttpClient) {
  }

  public getHarryPotter() {
    return this.http.get<any>("https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8")
  }


}
