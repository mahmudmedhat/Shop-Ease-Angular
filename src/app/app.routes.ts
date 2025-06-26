import { LayoutAuth } from './layouts/layout-auth/layout-auth';
import { Routes } from '@angular/router';
import { LayoutBlanks } from './layouts/layout-blanks/layout-blanks';
import { NotFound } from './components/not-found/not-found';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Brands } from './components/brands/brands';
import { Category } from './components/category/category';
import { Cart } from './components/cart/cart';

export const routes: Routes = [

  {
    path: "", component: LayoutAuth, children: [

     { path: "", redirectTo:"login",pathMatch:"full"},
     { path: "login", component: Login },
      { path: "register", component: Register },

    ]
  },
  {
    path: "", component: LayoutBlanks, children: [

     { path: "", redirectTo:"home",pathMatch:"full"},
      { path: "home", component: Home },
      { path: "product", component: Products },
      { path: "cart", component: Cart },
      { path: "category", component: Category },
            { path: "brands", component: Brands },



    ]
  },
  { path: "**", component: NotFound }
];
