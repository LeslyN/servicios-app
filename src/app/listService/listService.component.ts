import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listService',
  templateUrl: './listService.component.html',
  styleUrls: ['./listService.component.scss']
})
export class ListServiceComponent implements OnInit {

  servicesList = [];
  name: string;
  description: string;

  constructor() { }

  ngOnInit() {
  }



     // Guardar los valores en el local storage
    //  this.saveLocalStorage();
    editServices() {}

    deletedServices(index) {
   //   let indexServ = this.listService.length;
   //   const i = this.servicesList.indexOf(this.servicesList[indexServ]);
   //   if (i !== -1) {
   //     this.servicesList.splice(i, 1);
   //   }
   }
}


