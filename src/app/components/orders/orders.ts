import { orders } from './../../core/services/orders';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  imports: [ReactiveFormsModule],
  templateUrl: './orders.html',
  styleUrl: './orders.scss'
})
export class Orders implements OnInit {
  CartID: string = ""
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _orders = inject(orders)
  private readonly _ToastrService = inject(ToastrService)
  orders: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  })
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (prams) => {
        this.CartID = prams.get('id')!;
        console.log(this.CartID);

      }
    })

  }

  orderSubmit(): void {
    console.log(this.orders.value);
    this._orders.checkOut(this.CartID, this.orders.value).subscribe({
      next: (res) => {
        console.log(res);

        if (res.status === "success") {
          this._ToastrService.success("success")
          window.open(res.session.url, '_self')

        }

      },
      error: (err) => {
        console.log(err);

      }
    })

  }
}
