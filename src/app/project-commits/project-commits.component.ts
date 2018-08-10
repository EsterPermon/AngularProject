import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-commits',
  templateUrl: './project-commits.component.html',
  styleUrls: ['./project-commits.component.css']
})
export class ProjectCommitsComponent implements OnInit {

  commits: Object[];
  page = 1;
  subscript: Subscription;
  name: string

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.page);
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
    console.log(this.page);
    this.getCommits(this.name, this.page);
    this.router.navigate([this.name], {queryParams: {'page':this.page}})
  }

  prev(){
    this.page--;
    this.getCommits(this.name, this.page)
    this.router.navigate([this.name], {queryParams: {'page':this.page}})
  }
}
