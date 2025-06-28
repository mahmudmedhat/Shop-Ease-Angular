import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrayOfobject:any[], tirm:string): any[] {
    return arrayOfobject.filter((item)=> item.title.toLowerCase().includes(tirm.toLowerCase()));
  }

}

