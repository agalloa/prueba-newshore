import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';


const childRoutes: Routes = [
    { path: '', component: HomeComponent, data: { titulo: 'Home' } }

]


@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})

export class ChildRoutesModule { }