import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-commits',
  templateUrl: './project-commits.component.html',
  styleUrls: ['./project-commits.component.css']
})
export class ProjectCommitsComponent implements OnInit {

  commits: Object[];
  page: number;
  subscript: Subscription;
  name: string

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.page = 1;
    this.subscript = this.route.params.subscribe(
      (params: any) => {
        this.name = params['name'];
        this.getCommits(this.name, this.page);
      }
    )
    
  }

  ngOnDestroy(){
    this.subscript.unsubscribe();
  }
  getCommits(name: string, page: number){
    this.apiService.getCommits(name, page)
      .subscribe(commits => this.commits = commits);
  }

  next(){
    this.page++;
    this.getCommits(this.name, this.page)
  }

  prev(){
    this.page--;
    this.getCommits(this.name, this.page)
  }
}
