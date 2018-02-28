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


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
