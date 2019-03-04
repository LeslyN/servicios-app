import {
  Component
} from '@angular/core';
import {
  ServicesP
} from './servicesP';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'servicios-app';

  listaServ = [];
  copia = [...this.listaServ];

  values = new ServicesP();

  filteredArray = [];

  dataUpdate() {
    this.copia.push({
      name: this.values.name,
      description: this.values.description,
      category: this.values.category
    });

    this.listaServ = [...this.copia];
    // console.log('Lista', this.listaServ);
  }

  newService(event) {

    this.values.name = event.name;
    this.values.description = event.description;
    this.values.category = event.category;

    this.dataUpdate();
    // console.log('Copia', this.copia);
    // console.log('Lista despues de dataUpdate', this.listaServ);
  }



  filterItems(searchItem: string) {
    let valor = this.listaServ.some((val => val.category.includes(searchItem)));
    console.log('Valor: ', valor);
    console.log('searchItem: ', this.listaServ);

  }
}

// this.filteredArray = this.listaServ.filter(item => {
//   console.log('Item: ', item);
//   return searchItem.indexOf(item.category) > - 1;
// });
// console.log('SearchItem: ', searchItem);
// console.log('FilteredArray: ', this.filteredArray);
