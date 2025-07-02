import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class orders {
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _HttpClient = inject(HttpClient)
  myHeader: any
  constructor() {

    if (isPlatformBrowser(this._platformId)) {
      const token = localStorage.getItem('userToken');
      this.myHeader = { token };
    } else {
      this.myHeader = {};
    }
  }



  checkOut(id: string, data: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`, {
      "shippingAddress": data
    },

    )
  }


    getAllOrders(id:string): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/orders/user/${id}`)


      }
}
