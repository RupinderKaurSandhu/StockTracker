import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class StockTrackerService {
  symArr = ['HLT','aapl','goog','fb','TWTR','SNAP','MSFT'];
  data;

  // private _url= 'https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=HLT,aapl,goog,fb,TWTR,SNAP,MSFT';
  private _url= 'https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=' + this.symArr;
  constructor( private _http:HttpClient) { }

  getdata():Observable<any>{
    this.data =  this._http.get<any>(this._url);
    return this.data;
  }
}
