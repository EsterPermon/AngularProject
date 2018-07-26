import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: Object[];

  constructor(
    private apiService: ApiService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void{
    this.apiService.getProjects()
    .subscribe(projects => this.projects = projects);
  }

}
