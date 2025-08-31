import { AllOrders } from './../all-orders/all-orders';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { Ibrand } from '../../core/interface/ibrand';
import { Category } from './../../core/services/category';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.html',
  styleUrl: './brands.scss'
})
export class Brands  {
  private _Category=inject(Category)

allbrands=toSignal(this._Category.getAllbrands(),{initialValue:[] as Ibrand[]})



// ngOnInit(): void {
// this._NgxSpinner.show()
//   this._Category.getAllbrands().subscribe({
//     next:(res)=>{
//  this._NgxSpinner.hide()
//       this.allbrands=res.data


//     }
//   })
// }
}
