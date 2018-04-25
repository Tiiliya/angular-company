import { HomeComponent } from './home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, children:[
        { path: '', component: MainComponent}
    ] }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class HomeRoutingModule{}