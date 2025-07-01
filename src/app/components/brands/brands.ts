import { Ibrand } from '../../core/interface/ibrand';
import { Category } from './../../core/services/category';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.html',
  styleUrl: './brands.scss'
})
export class Brands implements OnInit {
  private _Category=inject(Category)
allbrands:Ibrand[]= {} as Ibrand[]

ngOnInit(): void {
  this._Category.getAllbrands().subscribe({
    next:(res)=>{

      this.allbrands=res.data

    }
  })
}
}
