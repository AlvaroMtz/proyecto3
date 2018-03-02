import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from '../services/profile.service';
import { HomepageComponent } from './homepage/homepage.component';
import { PublicationsService } from '../services/publications.service';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { NewPublicationComponent } from './new-publication/new-publication.component';
import { EditorComponent } from './editor/editor.component';
import { PublicationDetailComponent } from './publication-detail/publication-detail.component';
import { FroalaEditorModule } from 'angular-froala-wysiwyg/editor/editor.module';
import { FroalaViewModule } from 'angular-froala-wysiwyg/view/view.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProfileComponent,
    HomepageComponent,
    PublicationDetailsComponent,
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
    FroalaEditorModule.forRoot()
  ],
  providers: [SessionService, ProfileService, PublicationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
