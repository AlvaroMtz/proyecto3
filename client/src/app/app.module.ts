import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { ProfileService } from '../services/profile.service';
import { HomepageComponent } from './homepage/homepage.component';
import { PublicationsService } from '../services/publications.service';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { EditFormComponent } from './blog/edit-form/edit-form.component';
import { NewPublicationComponent } from './blog/new-publication/new-publication.component';
import { EditorComponent } from './blog/editor/editor.component';
import { PublicationDetailComponent } from './blog/publication-detail/publication-detail.component';
import { FroalaEditorModule } from 'angular-froala-wysiwyg/editor/editor.module';
import { FroalaViewModule } from 'angular-froala-wysiwyg/view/view.module';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { PagerService } from '../services/pageservice.service';
import { FollowService } from '../services/follow.service';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProfileComponent,
    HomepageComponent,
    SignupFormComponent,
    EditFormComponent,
    NewPublicationComponent,
    EditorComponent,
    PublicationDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    FroalaViewModule.forRoot(),
    FroalaEditorModule.forRoot(),
    MatButtonModule, 
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDD7O6HHT6jro5hISW54q9Fqt3JnXgLx8Y',
      libraries: ["places"]
    }),
    ReactiveFormsModule,
  ],
  providers: [SessionService, ProfileService, PublicationsService, PagerService, FollowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
