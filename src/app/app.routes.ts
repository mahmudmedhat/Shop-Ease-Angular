import { log } from 'node:console';
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
import { AllOrders } from './components/all-orders/all-orders';
import { Orders } from './components/orders/orders';
import { authGuard } from './core/guards/auth-guard';
// import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

  {
    path: "",
    component: LayoutBlanks,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: Home },

      // ✅ تحميل كسول
      { path: "product", loadComponent: () => import('./components/products/products').then(c => c.Products) },
      { path: "cart", loadComponent: () => import('./components/cart/cart').then(c => c.Cart) },
      { path: "category", loadComponent: () => import('./components/category/category').then(c => c.Category) },
      { path: "brands", loadComponent: () => import('./components/brands/brands').then(c => c.Brands) },
      { path: "detailes/:id", loadComponent: () => import('./components/product-details/product-details').then(c => c.ProductDetails) },

      // ✅ برضه تحميل كسول
      { path: "order/:id", loadComponent: () => import('./components/orders/orders').then(c => c.Orders) },
      { path: "allorders", loadComponent: () => import('./components/all-orders/all-orders').then(c => c.AllOrders) },
    ]
  },

  {
    path: "",
    component: LayoutAuth,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", loadComponent: () => import('./components/login/login').then(c => c.Login) },
      { path: "register", loadComponent: () => import('./components/register/register').then(c => c.Register) },
      { path: "forget", loadComponent: () => import('./components/forget-password/forget-password').then(c => c.ForgetPassword) },
    ]
  },

  { path: "**", component: NotFound }
];

