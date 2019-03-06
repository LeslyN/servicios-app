import {  Component, Output, EventEmitter } from '@angular/core';
import { ServicesP } from './servicesP';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'servicios-app';

  listaServ = [];
  copyList = [...this.listaServ];

  values = new ServicesP();

  filteredArray = [];
  dataEdittingService = {};

  @Output() item = new EventEmitter();

  dataUpdate() {
    this.copyList.push({
      name: this.values.name,
      description: this.values.description,
      category: this.values.category,
      index: this.listaServ.length
    });

    this.listaServ = [...this.copyList];
    // console.log('Lista', this.listaServ);
  }

  newService(event) {

    this.values.name = event.name;
    this.values.description = event.description;
    this.values.category = event.category;
    this.values.index = event.index;
    this.dataUpdate();
  }

  filterItems(searchItem: string) {
    this.filteredArray = this.listaServ.filter((val => val.category.includes(searchItem)));
    this.copyList = this.filteredArray;
    // console.log('SearchItem: ', searchItem);
    // console.log('filteredArray: ', this.filteredArray);
    // console.log('listServ: ', this.listaServ);
  }

  updateService(event) {
    this.dataEdittingService = event;
    // console.log('Event: ', event);
  }

}

// this.filteredArray = this.listaServ.filter(item => {
//   console.log('Item: ', item);
//   return searchItem.indexOf(item.category) > - 1;
// });
// console.log('SearchItem: ', searchItem);
// console.log('FilteredArray: ', this.filteredArray);
