import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.scss'
})
export class Category {

  //
  // counter:WritableSignal<number>=signal(0)

  // price:WritableSignal<number>=signal(20);
  // Quntatiy:WritableSignal<number>=signal(30);

  // total:Signal<number> = computed(()=> this.price() + this.Quntatiy())

  // changPrice():void{
  //   this.price.set(50)
  // }


  // changeCounter():void{
  //    this.counter.update(val=> val+1);
  // }
}
