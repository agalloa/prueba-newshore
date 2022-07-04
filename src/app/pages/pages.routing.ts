import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class PagesRoutingModule{}