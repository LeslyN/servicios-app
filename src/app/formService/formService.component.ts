import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formService',
  templateUrl: './formService.component.html',
  styleUrls: ['./formService.component.scss']
})
export class FormServiceComponent implements OnInit {
  formService: FormGroup;

  // serviceFormValues = {};
  swState = false;

  // Entradas desde el padre
  @Input() edittingService = null;

  // Emite al padre
  @Output() addServiceChild = new EventEmitter();

  @Output() editValuesChild = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formService = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });

  }

  // ngDoCheck() {
  //   // this.serviceFormValues = this.edittingService;
  //   // console.log('Service Form values: ', this.serviceFormValues);
  // }

  saveService() {
    this.addServiceChild.emit(this.formService.value);
    this.formService.reset();
  }

  editService() {
    let valuesFormService = this.formService.value;
    let copyValuesFormService = {
      ...valuesFormService,
      index: this.edittingService.index
    };

    this.editValuesChild.emit(copyValuesFormService);
    this.formService.reset();
  }
}
