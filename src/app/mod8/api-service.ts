import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http : HttpClient) {
  }

  public getCharacters(){
    return this.http.get<any>("https://hp-api.onrender.com/api/characters")
  }

}
