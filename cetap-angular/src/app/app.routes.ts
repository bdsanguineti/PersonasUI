import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import { ProvinciasComponent } from './components/provincias/provincias.component';

export const routes: Routes = [
    { path: 'personas', component: PersonasComponent },
    { path: 'provincias', component: ProvinciasComponent },
    { path: '', redirectTo: '/personas', pathMatch: 'full' },
];
