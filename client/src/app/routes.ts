import { Routes } from '@angular/router';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component'
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { EditFormComponent } from './blog/edit-form/edit-form.component';
import { NewPublicationComponent } from './blog/new-publication/new-publication.component';
import { PublicationDetailComponent } from './blog/publication-detail/publication-detail.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'signup', component: SignupFormComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'profile/:id', component: ProfileComponent},
    { path: 'edit/:id', component: EditFormComponent},
    { path: 'new', component: NewPublicationComponent},
    { path: 'post/:id', component: PublicationDetailComponent},
    // { path: '**', redirectTo: '' }   
];
