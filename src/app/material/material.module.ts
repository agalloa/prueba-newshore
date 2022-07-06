import { NgModule } from '@angular/core';

import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  exports: [
    MatRadioModule,
    MatInputModule
  ]
})
export class MaterialModule { }
