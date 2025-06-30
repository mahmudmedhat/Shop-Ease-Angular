import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../core/services/auth';
import { cart } from '../../core/services/cart';

@Component({
  selector: 'app-nav-bar-blank',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-bar-blank.html',
  styleUrl: './nav-bar-blank.scss'
})
export class NavBarBlank implements OnInit {

  readonly _Auth=inject(Auth);
  private _Cart=inject(cart)
  cartLenght:number=0;

ngOnInit(): void {
  this._Cart.getProductCart().subscribe({
    next:(res)=>{
      this.cartLenght=res.numOfCartItems


    },
    error:(err)=>{
      console.log(err);

    }
  })
}
}
