import { Login } from './../../components/login/login';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor() { }

  private readonly  _HttpClint= inject(HttpClient)
  registerForm(data:object):Observable<any>
  {
   return this._HttpClint.post(`${envirornments.baseUrl}/api/v1/auth/signup`,data)
  }

   setLoginForm(data:object):Observable<any>
  {
   return this._HttpClint.post(`${envirornments.baseUrl}/api/v1/auth/signin`,data)
  }
}
