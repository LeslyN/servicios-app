import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-listService',
  templateUrl: './listService.component.html',
  styleUrls: ['./listService.component.scss']
})
export class ListServiceComponent implements OnInit {
  // form: FormGroup;

  @Input() valuesList = [];

  @Output() listItemEmmiter = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  editService(index) {
    this.listItemEmmiter.emit(this.valuesList[index]);
  }

}


