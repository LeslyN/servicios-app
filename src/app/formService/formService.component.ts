import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesP } from '../servicesP';


@Component({
  selector: 'app-formService',
  templateUrl: './formService.component.html',
  styleUrls: ['./formService.component.scss']
})
export class FormServiceComponent implements OnInit {
  formService: FormGroup;
  values = new ServicesP();

  // Entradas desde el padre
  // @Input() valuesChild = new ServicesP();

  // Emite al padre
  @Output() addServiceChild = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formService = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }

  saveService() {
    // console.log(this.formService.value)
    this.addServiceChild.emit(this.formService.value);
    this.formService.reset();
  }
}
