import { Component, inject } from '@angular/core';
import { Product } from '../../core/services/product';
import { ToastrService } from 'ngx-toastr';
import { cart } from '../../core/services/cart';
import { Iproduct } from '../../core/interface/iproduct';
import { Icategory } from '../../core/interface/icategory';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search-pipe';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FormsModule,SearchPipe ,CurrencyPipe,RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

private _Products=inject(Product)
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
}}


