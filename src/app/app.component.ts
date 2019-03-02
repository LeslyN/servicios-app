import { Component } from '@angular/core';
import { ServicesP } from './servicesP';

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

  dataUpdate() {
    this.copia.push(
      {
        name: this.values.name,
        description: this.values.description,
        category: this.values.category
      }
    );

    this.listaServ = [...this.copia];
    console.log('Lista', this.listaServ);
  }

  newService(event) {

    this.values.name = event.name;
    this.values.description = event.description;
    this.values.category = event.category;

    this.dataUpdate();

    console.log();
    // console.log(this.listaServ);
  }

}
