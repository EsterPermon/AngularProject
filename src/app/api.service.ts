import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import {Project} from './project';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.github.com';
  private user = 'GloboCom';

  constructor(private http: HttpClient) { }

  getProjects():Observable<Project []>{
    const projectsUrl = this.apiUrl + '/users/' + this.user + '/repos';
    return this.http.get<Project []>(projectsUrl)
      .pipe(
        map((projects:Project[]) => {
          return projects.map((project: Project) => {
            return{
              name: project.name,
              forks_count: project.forks_count,
              stargazers_count: project.stargazers_count
            };
          });
        }),
        catchError(this.handleError('getProjects',[]))
      );
  }

  getProject(name: string): Observable<Object> {
    const projectUrl = this.apiUrl + '/repos/' + this.user + '/'+ name;
    return this.http.get<Object>(projectUrl)
      .pipe(
        catchError(this.handleError<Object>(`getProject name=${name}`))
      )

  }

  getCommits(name: string, page): Observable<Object[]>{
    const commitsUrl = this.apiUrl + '/repos/' + this.user + '/'+ name + '/commits?page='+ page +'&per_page=20';
    return this.http.get<Object[]> (commitsUrl)
      .pipe(
        catchError(this.handleError('getCommits',[]))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }
}
