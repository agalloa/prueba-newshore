import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightsComponent } from './flights/flights.component';
import { TopMostSearchedComponent } from './top-most-searched/top-most-searched.component';

@NgModule({
  declarations: [
    HomeComponent,
    FlightsComponent,
    TopMostSearchedComponent
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
    MaterialModule
  ],
})
export class PagesModule { }
