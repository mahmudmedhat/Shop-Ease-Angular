import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/services/product';
import { Iproduct } from '../../core/interface/iproduct';
import { cart } from '../../core/services/cart';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails implements OnInit{


  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _Product=inject(Product)
  private _Cart=inject(cart)
  private _ToastrService=inject(ToastrService)
  getSingelProduct:Iproduct | null=null;

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(idPram)=>{
      // console.log(idPram.get("id"));
     let idProduct=idPram.get("id");
     this._Product.getSpecificProduct(idProduct).subscribe({
      next:(res)=>{
         this.getSingelProduct=res.data
        //  console.log(this.getSingelProduct);

      },

      error:(err)=>{

      }
     })

    }
  })
}

addTocart(id:string){
     const token = localStorage.getItem('userToken');

  if (!token) {
    this._ToastrService.warning('من فضلك قم بتسجيل الدخول أولاً', 'تحذير');
    return;
  }
this._Cart.addToCart(id).subscribe(({

  next:(res)=>{
    console.log(res);

     this._ToastrService.success(res.message,'')

  },
  error:(err)=>{

  }
}))
}

}
