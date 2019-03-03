import { Component, OnInit, Input } from '@angular/core';
import { ServicesP } from '../servicesP';

@Component({
  selector: 'app-listService',
  templateUrl: './listService.component.html',
  styleUrls: ['./listService.component.scss']
})
export class ListServiceComponent implements OnInit {

  // list = [];

  @Input() valuesList = [];

  constructor() { }

  ngOnInit() {
  }

}


