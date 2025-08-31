import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Category {

  constructor(private _HttpClint: HttpClient) { }

  getAllCategory(): Observable<any> {
    return this._HttpClint.get(`${environment.baseUrl}/api/v1/categories`)
  }

  getAllbrands(): Observable<any> {
    return this._HttpClint.get(`${environment.baseUrl}/api/v1/brands`).pipe(map((res:any)=>res.data),shareReplay(1))
  }
  getAllSpecifiecCategory(id: string): Observable<any> {
    return this._HttpClint.get(`${environment.baseUrl}/api/v1/categories${id}`);
  }

}
