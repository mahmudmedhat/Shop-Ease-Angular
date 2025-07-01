import { cart } from './../../core/services/cart';
import { Subscription } from 'rxjs';
import { Iproduct } from '../../core/interface/iproduct';
import { Product } from '../../core/services/product';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../../core/services/category';
import { Icategory } from '../../core/interface/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search-pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  imports: [CarouselModule,FormsModule,SearchPipe ,RouterLink,CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit,OnDestroy {
customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    autoplay:true,
    autoplayTimeout:2000,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
items:1,
    nav: true
  }
customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    autoplay:true,
    autoplayTimeout:2000,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  /**-------------------------------------------- */
private _Products=inject(Product)
private _Category=inject(Category)
private _Router=inject(Router)
private _ToastrService=inject(ToastrService)
private _Cart=inject(cart)
productList: Iproduct[] = [];
categoryList:Icategory[]=[]
text:string ='';
 getAllProductSub!:Subscription;
ngOnInit(): void {
 this.getAllProductSub= this._Products.getAllProduct().subscribe({
    next:(res)=>{

      this.productList=res.data

    },
    error:(err)=>{
      console.log(err);

    }
  })

  /*-------------------------------------- */

  this._Category.getAllCategory().subscribe({
    next:(res)=>{

      this.categoryList=res.data;


    },
    error:(err)=>{
      console.log(err);

    }
  })
}
ngOnDestroy(): void {
  this.getAllProductSub?.unsubscribe();
}



addCart(id:string):void{

    const token = localStorage.getItem('userToken');

  if (!token) {
    this._ToastrService.warning('من فضلك قم بتسجيل الدخول أولاً', 'تحذير');
    this._Router.navigate(['/login'])

    return;
  }

this._Cart.addToCart(id).subscribe({
  next:(res)=>{
    console.log(res);

    this._ToastrService.success(res.message,'')


  },
  error:(err)=>{
    console.log(err);

  }
})
}
}
