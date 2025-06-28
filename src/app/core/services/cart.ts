import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Cart {

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
}
