// import { inject, PLATFORM_ID } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { isPlatformBrowser } from '@angular/common';

// export const authGuard: CanActivateFn = (route, state) => {
//   const _Router = inject(Router);
//   const platformId = inject(PLATFORM_ID);

//   if (isPlatformBrowser(platformId)) {
//     const token = localStorage.getItem('userToken');
//         console.log('Token:', token);
//     if (token !== null) {
//       return true;
//     } else {
//       _Router.navigate(['/login']);
//       return false;
//     }
//   } else {

//     return false;
//   }
// };
