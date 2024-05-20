import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { PersonasListComponent } from './components/personas/personas-list/personas-list.component';
import { PersonaAddComponent } from './components/personas/persona-add/persona-add.component';
import { PersonaEditComponent } from './components/personas/persona-edit/persona-edit.component';
import { PersonaDetailComponent } from './components/personas/persona-detail/persona-detail.component';

export const routes: Routes = [
    { path: 'personas', component: PersonasListComponent },
    // { path: 'personas/add', component: PersonaAddComponent },
    // { path: 'personas/edit/:id', component: PersonaEditComponent },
    // { path: 'personas/:id', component: PersonaDetailComponent },
    { path: 'provincias', component: ProvinciasComponent },
    { path: '', redirectTo: '/personas', pathMatch: 'full' },
];
