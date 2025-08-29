import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { throwError } from 'rxjs';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const _PLATFORM_ID = inject(PLATFORM_ID);
  let token: string | null = null;

  if (isPlatformBrowser(_PLATFORM_ID)) {
    token = localStorage.getItem("userToken");
  }

  // لو مفيش توكن و الريكوست رايح للكارت أو الأوردر → امنعه
  if (!token && (req.url.includes('cart') || req.url.includes('order'))) {
    return throwError(() => new Error("Unauthorized request: no token found"));
  }

  // لو في توكن → ابعته مع الهيدر
  if (token) {
    if (req.url.includes('cart') || req.url.includes('order')) {
      req = req.clone({
        setHeaders: { token }
      })

    }


  }

  return next(req);
};
