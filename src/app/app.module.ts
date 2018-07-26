import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ApiRoutingModule } from './api-routing.module';
import { ProjectCommitsComponent } from './project-commits/project-commits.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectDetailComponent,
    ProjectCommitsComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    ApiRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
