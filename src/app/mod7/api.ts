import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, concatMap, distinctUntilChanged, map, retry, tap, timeout} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {


  constructor(private http: HttpClient) {
  }

  public getHarryPotter() {
    return this.http.get<any>("https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8")
  }

  public getHarryPotter2() {
    return this.http.get<any>("https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8").pipe(
      map(
        (data: any) => {
          const harry : Character = {
            img : data[0].image,
            name : data[0].name
          }
          return harry;
        }
      ),
      tap(
        //utile pour logger ou pour initialiser
        data => console.log(data)
      ),
      concatMap(
        data => {
          return this.http.get<any>("https://hp-api.onrender.com/api/character/" + data.name)
        }
      ),
      retry(3),
      timeout(20000),
      catchError(err => {
        return "oups !";
      }),
      distinctUntilChanged()
    )
  }
}


export interface Character {
  name: string
  img: string
}
