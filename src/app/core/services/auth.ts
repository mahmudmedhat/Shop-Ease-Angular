
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor() { }
  userData:any

  private readonly  _HttpClint= inject(HttpClient)
  private readonly  _Router= inject(Router)

  registerForm(data:object):Observable<any>
  {
   return this._HttpClint.post(`${environment.baseUrl}/api/v1/auth/signup`,data)
  }

   setLoginForm(data:object):Observable<any>
  {
   return this._HttpClint.post(`${environment.baseUrl}/api/v1/auth/signin`,data)
  }



  seveUserData():void{
    if(localStorage.getItem("userToken")!=null){
   this.userData=  jwtDecode(localStorage.getItem("userToken")!)
   console.log(this.userData);


    }


  }

  logOut():void{
    localStorage.removeItem("userToken");
    this.userData=null;
      this._Router.navigate(['./login'])
    }

    setEmileVerify(data:object):Observable<any>{
      return this._HttpClint.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords`,data)
    }


        setCodeVerify(data:object):Observable<any>{
      return this._HttpClint.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`,data)
    }


          setNewPassword(data:object):Observable<any>{
      return this._HttpClint.put(`${environment.baseUrl}/api/v1/auth/verifyResetCode`,data)
    }
}
