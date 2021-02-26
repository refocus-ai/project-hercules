import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  public postDataScore (dataObject: any) {
    return this._http.post("https://afium2f1p0.execute-api.us-east-2.amazonaws.com/prod", dataObject)
  }
}
