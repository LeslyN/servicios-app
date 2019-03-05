import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-listService',
  templateUrl: './listService.component.html',
  styleUrls: ['./listService.component.scss']
})
export class ListServiceComponent implements OnInit {
  form: FormGroup;
  edit = false;

  @Input() valuesList = [];

  @Output() addServiceList = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }

  editService() {
    this.edit = true;
  }

  saveListService(event) {
    let vLis = this.addServiceList.emit(this.form.value);
    console.log('Valor de this.form.value desde listService', this.form.value);
    console.log('Este es form con emit', vLis);

    // console.log(this.addServiceList.emit(this.form.value));
    this.form.reset();
    this.edit = false;
  }

}


