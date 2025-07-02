import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {


  /**logic---------request anly */

/*لازم الاول اعمل نسخه من الركوست مينفعش اعدل عليه بيظرب ايررور */
if (typeof window !== 'undefined') {
if(localStorage.getItem("userToken") !==null){
  if(req.url.includes('cart') || req.url.includes('orders')){
     req=req.clone({
  setHeaders:{token:localStorage.getItem('userToken') !}
})
  }



}
}
 return next(req);
// respons
};
