import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component'
import { SignupFormComponent } from './signup-form/signup-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { NewPublicationComponent } from './new-publication/new-publication.component';
import { PublicationDetailComponent } from './publication-detail/publication-detail.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'signup', component: SignupFormComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'profile/:id', component: ProfileComponent},
    { path: 'edit/:id', component: EditFormComponent},
    { path: 'new', component: NewPublicationComponent},
    { path: 'post/:id', component: PublicationDetailComponent},
    { path: '**', redirectTo: '' }   
];
