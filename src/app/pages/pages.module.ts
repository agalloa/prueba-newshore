import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HomeComponent,

  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    SharedModule,
    MaterialModule
  ],
})
export class PagesModule { }
