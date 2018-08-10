import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: any[];

  constructor(
    private apiService: ApiService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void{
    this.apiService.getProjects()
      .subscribe(projects => this.projects = projects
        .sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        }))
  }

}
