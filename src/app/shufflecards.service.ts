import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICards } from './ICards'


@Injectable({
  providedIn: 'root'
})
export class ShufflecardsService {
  private _url1: string = "http://0.0.0.0:5000/allplayers" ;
  constructor(private http: HttpClient) { }

  getCardsForPlayer1(): Observable<ICards[]> {
    return this.http.get<ICards[]>(this._url1);

  }


}
