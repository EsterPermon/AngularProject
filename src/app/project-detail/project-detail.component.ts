import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {ApiService} from '../api.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Object;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location
    
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void{
    var name = this.route.snapshot.paramMap.get('name');
    this.apiService.getProject(name)
      .subscribe(project => this.project = project);
  }

  clearRoute():void{
    this.location.back();
  }

}
