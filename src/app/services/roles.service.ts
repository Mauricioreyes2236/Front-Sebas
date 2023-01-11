import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private _http:HttpClient) { }

  public getRoles():Promise<any>{
    return new Promise((resolve,reject)=>{
      this._http.get<any>(`${environment.baseUrl}Role/GetRoles`).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }

  public postRole(params:any):Promise<any>{
    return new Promise((resolve,reject) => {
      this._http.post<any>(`${environment.baseUrl}Role/PostRole`, params).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }

  public getRole(params:any):Promise<any>{
    return new Promise((resolve,reject) => {
      this._http.get<any>(`${environment.baseUrl}Role/GetRole/ ${params}`).subscribe(
       data => resolve(data),
       error => reject(error)
      )
    })
  }

}
