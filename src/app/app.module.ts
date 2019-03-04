import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListServiceComponent } from './listService/listService.component';
import { FormServiceComponent } from './formService/formService.component';
import { SearchPipe } from './search.pipe';

@NgModule({
   declarations: [
      AppComponent,
      ListServiceComponent,
      FormServiceComponent,
      SearchPipe
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
