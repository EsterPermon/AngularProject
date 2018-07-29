import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import {Project} from '../project'
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: Observable<Project[]>;

  constructor(
    private apiService: ApiService) { }

  ngOnInit() {
    this.projects = this.getProjects();
    this.projects.subscribe(x => x.map(xi => console.log(xi.name)));
  }

  getProjects(): Observable< Project[]>{
    return this.apiService.getProjects();
  }

}
