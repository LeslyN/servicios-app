import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formService',
  templateUrl: './formService.component.html',
  styleUrls: ['./formService.component.scss']
})
export class FormServiceComponent implements OnInit, OnChanges {
  formService: FormGroup;

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.edittingService) {
      if (typeof changes.edittingService.previousValue === 'undefined') {
        return;
      }
      if (changes.edittingService.currentValue) {
        const newValues = changes.edittingService.currentValue;
        console.log( newValues, this.formService );
        this.formService = this.formBuilder.group( {
          name: [newValues.name, [Validators.required]],
          description: [newValues.description, [Validators.required]],
          category: [newValues.category, [Validators.required]]
        } );
      }
    }
  }

  // Si el objeto está vacío cambiar el boton de guardar a actualizar
  private isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  saveService() {
    this.addServiceChild.emit( this.formService.value );
    this.formService.reset();
  }

  editService() {
    this.editValuesChild.emit( {
      ...this.formService.value,
      index: this.edittingService.index
    });
    this.formService.reset();
  }
}
