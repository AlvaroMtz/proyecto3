import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component'
import { SignupFormComponent } from './signup-form/signup-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';

export const routes: Routes = [
    { path: '', component: SignupFormComponent},
    { path: 'home', component: HomepageComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'profile/:id', component: ProfileComponent},
    { path: 'edit/:id', component: EditFormComponent},
    { path: '**', redirectTo: 'home' }
];
