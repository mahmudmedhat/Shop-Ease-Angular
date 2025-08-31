import { toSignal } from '@angular/core/rxjs-interop';
import { IOrders } from '../../core/interface/iorders';
import { Auth } from '../../core/services/auth';
import { orders } from './../../core/services/orders';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-all-orders',
  imports: [],
  templateUrl: './all-orders.html',
  styleUrl: './all-orders.scss'
})
export class AllOrders  {
 private readonly _orders= inject(orders)
 private readonly _Auth= inject(Auth)



 private readonly userId= this._Auth.userData?.id ?? (this._Auth.seveUserData(),this._Auth.userData?.id)
 AllOrders = toSignal(this._orders.getAllOrders(this.userId),{initialValue:[]})

}

