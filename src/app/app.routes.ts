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
import { ProductDetails } from './components/product-details/product-details';
import { ForgetPassword } from './components/forget-password/forget-password';
// import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

  {
    path: "", component: LayoutAuth, children: [

     { path: "", redirectTo:"login",pathMatch:"full"},
     { path: "login", component: Login },
      { path: "register", component: Register },
      { path: "forget", component: ForgetPassword },

    ]
  },
  {
    path: "", component: LayoutBlanks,  children: [

     { path: "", redirectTo:"home",pathMatch:"full"},
      { path:"home", component: Home },
      { path: "product", component: Products },
      { path: "cart", component: Cart },
      { path: "category", component: Category },
      { path: "brands", component: Brands },
      { path: "detailes/:id", component: ProductDetails },



    ]
  },
  { path: "**", component: NotFound }
];
