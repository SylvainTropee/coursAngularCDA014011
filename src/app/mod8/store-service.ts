import {computed, Injectable, Signal, signal} from '@angular/core';
import {ApiService} from './api-service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {

  private readonly _characters = signal<any[] | null>(null)
  public readonly characters = this._characters.asReadonly();

  public readonly nbCharacters : Signal<number> = computed(
    () => this._characters()?.length ?? 0
  )

  constructor(private apiService: ApiService) {
  }

  public loadCharacters() {
    this.apiService.getCharacters().subscribe(
      data => this._characters.set(data)
    )
  }

}
