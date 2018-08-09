import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ProjectCommitsComponent} from './project-commits/project-commits.component';
import {ProjectsListComponent} from './projects-list/projects-list.component';

const routes: Routes = [
  {path: ':name', component: ProjectDetailComponent},
  
  
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class ApiRoutingModule { }
