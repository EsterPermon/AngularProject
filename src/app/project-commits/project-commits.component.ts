import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-commits',
  templateUrl: './project-commits.component.html',
  styleUrls: ['./project-commits.component.css']
})
export class ProjectCommitsComponent implements OnInit {

  commits: Object[];
  page = 1;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCommits(this.page)
  }

  getCommits(page: number){
    var name = this.route.snapshot.paramMap.get('name');
    this.apiService.getCommits(name, page)
      .subscribe(commits => this.commits = commits);
  }

  next(){
    this.page++;
    this.getCommits(this.page)
  }

  prev(){
    this.page--;
    this.getCommits(this.page)
  }
}
