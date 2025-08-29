import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../core/services/auth';
import { cart } from '../../core/services/cart';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyTranslate } from '../../core/services/my-translate';

@Component({
  selector: 'app-nav-bar-blank',
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav-bar-blank.html',
  styleUrl: './nav-bar-blank.scss'
})
export class NavBarBlank implements OnInit {

  readonly _Auth = inject(Auth);
  readonly _MyTranslate = inject(MyTranslate);
  private _Cart = inject(cart)
  readonly _TranslateService = inject(TranslateService)



  cartLenght: Signal<number> = computed(()=> this._Cart.CartItems());




  change(lang: string): void {
    this._MyTranslate.clangeLang(lang);
  }

  ngOnInit(): void {

    this._Cart.getProductCart().subscribe({
      next: (res) => {
        this._Cart.CartItems.set(res.numOfCartItems)
      }
    })



    console.log(this.cartLenght);

  }
}
