import { Component } from '@angular/core';
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'servicios-app';

  // servicesList = [];

  servicesList = JSON.parse(localStorage.getItem("serviceList"));
  name: string;
  description: string;

  editting = false;

  constructor() {
    // this.saveLocalStorage();
  }

  addServices() {
   this.servicesList.push(
     {
       name: this.name,
       description: this.description,
       index: this.servicesList.length
     }
   );

    // Guardar los valores en el local storage
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem('serviceList', JSON.stringify(this.servicesList));
  }

  editServices() {}

  cancelServices() {

    // Dejará los valores como estaban antes, recuperar valores del local storage
  }

  deletedServices(index) {
    let indexServ = this.listService.length;
    const i = this.servicesList.indexOf(this.servicesList[indexServ]);
    if (i !== -1) {
      this.servicesList.splice(i, 1);
    }
  }

  searchServices(name) {
    const filterServices = this.servicesList.filter(service => service.name);

  }




  listService() {
    this.editting = true;
    // Recuperar los datos del local storage
    let serviceLists = JSON.parse(localStorage.getItem("serviceList"));
  }
}
