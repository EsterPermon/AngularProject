import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ProjectCommitsComponent} from './project-commits/project-commits.component';
import {ProjectsListComponent} from './projects-list/projects-list.component';

const routes: Routes = [
  {
    path: '', 
    component: ProjectsListComponent,
    children: [
      {
        path: ':name', 
        component: ProjectDetailComponent,
        children: [
          {path: '' , component: ProjectCommitsComponent}
        ]
      }
    ]
  }  
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ApiRoutingModule { }
