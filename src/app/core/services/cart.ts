import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class cart {

  private readonly _HttpClient = inject(HttpClient)
    private readonly _platformId = inject(PLATFORM_ID);
  myHeader: any

    constructor() {
    if (isPlatformBrowser(this._platformId)) {
      const token = localStorage.getItem('userToken');
      this.myHeader = { token };
    } else {
      this.myHeader = {};
    }
  }

  addToCart(id: string): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`,
      {
        "productId": id
      },
      {
        headers: this.myHeader
      }


    )
  }

  getProductCart():Observable<any>{
   return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`,{headers:this.myHeader})
  }


  removerProductFromCart(id:string):Observable<any>{
   return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`,{headers:this.myHeader})
  }

  updatProductFromCart(id:string,productCount:number):Observable<any>{
   return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`,
    {

        "count":productCount
   },
   {headers:this.myHeader})
  }

    clearCart():Observable<any>{
   return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart`,{headers:this.myHeader})
  }
}
