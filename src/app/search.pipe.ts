import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, term?: any): any {
    if (term === undefined) {
      return items;
    }
    console.log('Esto viee items', items);
    return items.filter(item => item.category.includes(term));
  }

}
