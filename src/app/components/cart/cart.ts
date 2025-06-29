import { ICart } from '../../core/interface/icart';
import { cart } from './../../core/services/cart';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements OnInit {
  private readonly _cart = inject(cart)
  cartItems: ICart = {} as ICart
  ngOnInit(): void {
    this._cart.getProductCart().subscribe({
      next: (res) => {

        this.cartItems = res.data
      },
      error: (err) => {

      }
    })
  }

  removeItem(id: string) {
    this._cart.removerProductFromCart(id).subscribe({
      next: (res) => {
        this.cartItems = res.data

      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  updataProduct(id: string, count: number): void {
    if (count > 0) {
      this._cart.updatProductFromCart(id, count).subscribe({
        next: (res) => {
          this.cartItems = res.data

        },
        error: (err) => {
          console.log(err);

        }
      })
    }
  }

  clearAllCart(): void {

    this._cart.clearCart().subscribe({
      next: (res) => {

        if (res.message ==="success"){
          this.cartItems={} as ICart
        }


  },
  error: (err) => {
      console.log(err);

}
  })
 }
}
