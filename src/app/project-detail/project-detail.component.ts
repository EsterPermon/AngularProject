import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import {ApiService} from '../api.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Object;
  subscript: Subscription;


  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location
    
  ) { }

  ngOnInit() {
    this.subscript = this.route.params.subscribe(
      (params: any) => {
        this.getProject(params['name']);
      }
    )
    
  }

  ngOnDestroy(){
    this.subscript.unsubscribe();
  }

  getProject(name: string): void{
    this.apiService.getProject(name)
      .subscribe(project => this.project = project);
  }

  clearRoute():void{
    this.location.back();
  }

}
