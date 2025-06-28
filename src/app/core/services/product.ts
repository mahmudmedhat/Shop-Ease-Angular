import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Product {


 private readonly _HttpClient=inject(HttpClient)
  // constructor() { }

  getAllProduct():Observable<any>
  {

    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products`);
  }


  getSpecificProduct(ID:string | null):Observable<any>
  {

    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products/${ID}`);
  }
}
