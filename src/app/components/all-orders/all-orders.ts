import { IOrders } from '../../core/interface/iorders';
import { Auth } from '../../core/services/auth';
import { orders } from './../../core/services/orders';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-orders',
  imports: [],
  templateUrl: './all-orders.html',
  styleUrl: './all-orders.scss'
})
export class AllOrders implements OnInit {
  allOrders:IOrders[]=[]
 private readonly _orders= inject(orders)
 private readonly _Auth= inject(Auth)

ngOnInit(): void {
    if (!this._Auth.userData) {
    this._Auth.seveUserData(); // تأكد إنه بينفذها مرة واحدة فقط حسب المشروع
  }
 const  userId=this._Auth.userData?.id
  this._orders.getAllOrders(userId).subscribe({
    next:(res)=>{
      console.log(res);
      this.allOrders=res

    }
  })
}

}
