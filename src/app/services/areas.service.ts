import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(private _http:HttpClient) { }

  public postArea(params:any):Promise<any>{
    return new Promise((resolve,reject) => {
      this._http.post<any>(`${environment.baseUrl}Area/PostArea`, params).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }

  public getAreas():Promise<any>{
    return new Promise((resolve,reject) => {
      this._http.get<any>(`${environment.baseUrl}Area/GetAreas`).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }
}
