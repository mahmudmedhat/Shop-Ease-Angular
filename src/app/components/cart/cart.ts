import { ToastrService } from 'ngx-toastr';
import { ICart } from '../../core/interface/icart';
import { cart } from './../../core/services/cart';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements OnInit {
  private readonly _cart = inject(cart)
  private _ToastrService = inject(ToastrService)
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
        this._ToastrService.success('Product removed from cart successfully!', 'Removed');
        this._cart.CartItems.set(res.numOfCartItems)

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
          this._ToastrService.success('Quantity updated successfully!', 'Updated');

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
        console.log(res);

        if (res.message === "success") {
          this.cartItems = {} as ICart
          this._cart.CartItems.set(res.numOfCartItems)

          this._ToastrService.success('Cart cleared successfully!', 'Cleared');
        }


      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
