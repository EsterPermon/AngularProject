import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ApiRoutingModule } from './api-routing.module';
import { ProjectCommitsComponent } from './project-commits/project-commits.component';
import { ApiService } from './api.service';

const routes: Routes = [
  {path: '', component: ProjectsListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectDetailComponent,
    ProjectCommitsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    ApiRoutingModule
  ],
  exports:[RouterModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

  